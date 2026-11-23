import { Ensure, equals } from '@serenity-js/assertions';
import { describe, test } from '@serenity-js/playwright-test';
import { isVisible, Page, Text } from '@serenity-js/web';

import { cartBadgeCount, errorBannerText } from './saucedemo/questions';
import { AddProductToCart, Login, NavigateToCart, SauceDemoCredentials } from './saucedemo/tasks';
import { CartPage, HomePage } from './saucedemo/ui';

describe('SauceDemo Authentication', () => {

    describe('Equivalence Partitioning — Happy Path', () => {

        test('allows a standard user to log in successfully and access the inventory', async ({ actor }) => {
            await actor.attemptsTo(
                Login.toSauceDemoAsStandardUser(),
                Ensure.that(Page.current().title(), equals('Swag Labs')),
                Ensure.that(HomePage.headerTitle(), isVisible()),
                Ensure.that(Text.of(HomePage.headerTitle()), equals('Products')),
            );
        });
    });

    describe('Boundary Value Analysis — Empty Inputs', () => {

        test('displays a validation error when the username is omitted', async ({ actor }) => {
            await actor.attemptsTo(
                Login.toSauceDemoAs('', SauceDemoCredentials.defaultPassword),
                Ensure.that(errorBannerText(), equals('Epic sadface: Username is required')),
            );
        });

        test('displays a validation error when the password is omitted', async ({ actor }) => {
            await actor.attemptsTo(
                Login.toSauceDemoAs(SauceDemoCredentials.standardUser, ''),
                Ensure.that(errorBannerText(), equals('Epic sadface: Password is required')),
            );
        });
    });

    describe('Negative Testing & Error Guessing', () => {

        test('prevents a locked out user from authenticating', async ({ actor }) => {
            await actor.attemptsTo(
                Login.toSauceDemoAsLockedOutUser(),
                Ensure.that(errorBannerText(), equals('Epic sadface: Sorry, this user has been locked out.')),
            );
        });

        test('displays an error when unknown credentials are submitted', async ({ actor }) => {
            await actor.attemptsTo(
                Login.toSauceDemoAs('unknown_user', 'invalid_password'),
                Ensure.that(
                    errorBannerText(),
                    equals('Epic sadface: Username and password do not match any user in this service'),
                ),
            );
        });
    });
});

describe('SauceDemo Shopping Cart', () => {

    describe('Adding Products to Cart — Happy Path', () => {

        test('increments the cart badge count when adding a single product', async ({ actor }) => {
            await actor.attemptsTo(
                Login.toSauceDemoAsStandardUser(),
                AddProductToCart.called('Sauce Labs Backpack'),
                Ensure.that(cartBadgeCount(), equals('1')),
                NavigateToCart.now(),
                Ensure.that(Text.of(CartPage.headerTitle()), equals('Your Cart')),
                Ensure.that(CartPage.itemCalled('Sauce Labs Backpack'), isVisible()),
            );
        });

        test('allows adding multiple products and verifies them in the cart', async ({ actor }) => {
            await actor.attemptsTo(
                Login.toSauceDemoAsStandardUser(),
                AddProductToCart.called('Sauce Labs Backpack', 'Sauce Labs Bike Light'),
                Ensure.that(cartBadgeCount(), equals('2')),
                NavigateToCart.now(),
                Ensure.that(Text.of(CartPage.headerTitle()), equals('Your Cart')),
                Ensure.that(CartPage.itemCalled('Sauce Labs Backpack'), isVisible()),
                Ensure.that(CartPage.itemCalled('Sauce Labs Bike Light'), isVisible()),
            );
        });
    });
});

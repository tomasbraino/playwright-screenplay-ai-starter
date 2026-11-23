import { includes } from '@serenity-js/assertions';
import { Answerable, d, QuestionAdapter } from '@serenity-js/core';
import { By, PageElement, PageElements, Text } from '@serenity-js/web';

export const CartPage = {
    headerTitle: () =>
        PageElement.located(By.css('[data-test="title"]'))
            .describedAs('cart page title'),

    cartList: () =>
        PageElement.located(By.css('[data-test="cart-list"]'))
            .describedAs('cart list'),

    cartItems: () =>
        PageElements.located(By.css('[data-test="inventory-item"]'))
            .describedAs('cart items'),

    itemCalled: (name: Answerable<string>) =>
        PageElements.located(By.css('[data-test="inventory-item"]'))
            .where(Text, includes(name))
            .first()
            .describedAs(d`cart item called ${ name }`) as QuestionAdapter<PageElement>,

    itemQuantity: (item: Answerable<PageElement>) =>
        PageElement.located(By.css('[data-test="item-quantity"]'))
            .of(item)
            .describedAs('cart item quantity'),

    continueShoppingButton: () =>
        PageElement.located(By.css('[data-test="continue-shopping"]'))
            .describedAs('continue shopping button'),

    checkoutButton: () =>
        PageElement.located(By.css('[data-test="checkout"]'))
            .describedAs('checkout button'),

    removeButtonFor: (itemIdentifier: Answerable<string>) =>
        PageElement.located(By.css(`[data-test="remove-${ itemIdentifier }"]`))
            .describedAs(d`remove button for ${ itemIdentifier }`),
};

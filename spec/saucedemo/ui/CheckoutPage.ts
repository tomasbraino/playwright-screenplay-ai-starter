import { By, PageElement } from '@serenity-js/web';

export const CheckoutPage = {
    // Step One: Your Information
    headerTitle: () =>
        PageElement.located(By.css('[data-test="title"]'))
            .describedAs('checkout page title'),

    firstNameInput: () =>
        PageElement.located(By.css('[data-test="firstName"]'))
            .describedAs('first name input'),

    lastNameInput: () =>
        PageElement.located(By.css('[data-test="lastName"]'))
            .describedAs('last name input'),

    postalCodeInput: () =>
        PageElement.located(By.css('[data-test="postalCode"]'))
            .describedAs('postal code input'),

    continueButton: () =>
        PageElement.located(By.css('[data-test="continue"]'))
            .describedAs('continue button'),

    cancelButton: () =>
        PageElement.located(By.css('[data-test="cancel"]'))
            .describedAs('cancel button'),

    errorMessage: () =>
        PageElement.located(By.css('[data-test="error"]'))
            .describedAs('checkout error message'),

    errorDismissButton: () =>
        PageElement.located(By.css('[data-test="error-button"]'))
            .describedAs('error dismiss button'),

    // Step Two: Overview
    summaryInfoContainer: () =>
        PageElement.located(By.css('.summary_info'))
            .describedAs('summary info container'),

    paymentInformationLabel: () =>
        PageElement.located(By.css('[data-test="payment-info-label"]'))
            .describedAs('payment info label'),

    paymentInformationValue: () =>
        PageElement.located(By.css('[data-test="payment-info-value"]'))
            .describedAs('payment info value'),

    shippingInformationLabel: () =>
        PageElement.located(By.css('[data-test="shipping-info-label"]'))
            .describedAs('shipping info label'),

    shippingInformationValue: () =>
        PageElement.located(By.css('[data-test="shipping-info-value"]'))
            .describedAs('shipping info value'),

    itemTotalLabel: () =>
        PageElement.located(By.css('[data-test="subtotal-label"]'))
            .describedAs('subtotal label'),

    taxLabel: () =>
        PageElement.located(By.css('[data-test="tax-label"]'))
            .describedAs('tax label'),

    totalLabel: () =>
        PageElement.located(By.css('[data-test="total-label"]'))
            .describedAs('total label'),

    finishButton: () =>
        PageElement.located(By.css('[data-test="finish"]'))
            .describedAs('finish button'),

    // Step Three: Checkout Complete
    completeContainer: () =>
        PageElement.located(By.css('[data-test="checkout-complete-container"]'))
            .describedAs('checkout complete container'),

    completeHeader: () =>
        PageElement.located(By.css('[data-test="complete-header"]'))
            .describedAs('complete header'),

    completeText: () =>
        PageElement.located(By.css('[data-test="complete-text"]'))
            .describedAs('complete text'),

    backHomeButton: () =>
        PageElement.located(By.css('[data-test="back-to-products"]'))
            .describedAs('back home button'),

    ponyExpressImage: () =>
        PageElement.located(By.css('[data-test="pony-express"]'))
            .describedAs('pony express image'),
};

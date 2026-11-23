import { Answerable, Task, the } from '@serenity-js/core';
import { Clear, Click, Enter } from '@serenity-js/web';

import { CheckoutPage } from '../ui/CheckoutPage';

export const CompleteCheckout = {
    withInformation: (
        firstName: Answerable<string>,
        lastName: Answerable<string>,
        postalCode: Answerable<string>,
    ): Task =>
        Task.where(the`#actor completes checkout with information`,
            Clear.theValueOf(CheckoutPage.firstNameInput()),
            Enter.theValue(firstName).into(CheckoutPage.firstNameInput()),
            Clear.theValueOf(CheckoutPage.lastNameInput()),
            Enter.theValue(lastName).into(CheckoutPage.lastNameInput()),
            Clear.theValueOf(CheckoutPage.postalCodeInput()),
            Enter.theValue(postalCode).into(CheckoutPage.postalCodeInput()),
            Click.on(CheckoutPage.continueButton()),
            Click.on(CheckoutPage.finishButton()),
        ),
};

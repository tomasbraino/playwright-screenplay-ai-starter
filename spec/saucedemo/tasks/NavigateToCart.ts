import { equals } from '@serenity-js/assertions';
import { Task, the, Wait } from '@serenity-js/core';
import { Click, Text } from '@serenity-js/web';

import { CartPage } from '../ui/CartPage';
import { HomePage } from '../ui/HomePage';

export const NavigateToCart = {
    now: (): Task =>
        Task.where(the`#actor navigates to the shopping cart`,
            Click.on(HomePage.shoppingCartLink()),
            Wait.until(Text.of(CartPage.headerTitle()), equals('Your Cart')),
        ),
};

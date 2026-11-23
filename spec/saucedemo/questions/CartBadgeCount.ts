import { QuestionAdapter } from '@serenity-js/core';
import { Text } from '@serenity-js/web';

import { HomePage } from '../ui/HomePage';

export const cartBadgeCount = (): QuestionAdapter<string> =>
    Text.of(HomePage.shoppingCartBadge()).describedAs('shopping cart badge count');

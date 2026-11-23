import { QuestionAdapter } from '@serenity-js/core';
import { Text } from '@serenity-js/web';

import { LoginPage } from '../ui/LoginPage';

export const errorBannerText = (): QuestionAdapter<string> =>
    Text.of(LoginPage.errorBanner()).describedAs('login error banner text');

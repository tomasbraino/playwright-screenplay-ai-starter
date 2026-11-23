import { By, PageElement } from '@serenity-js/web';

export const LoginPage = {
    usernameInput: () => PageElement.located(By.css('[data-test="username"]')).describedAs('username input'),
    passwordInput: () => PageElement.located(By.css('[data-test="password"]')).describedAs('password input'),
    loginButton:        () => PageElement.located(By.css('[data-test="login-button"]')).describedAs('login button'),
    errorBanner:        () => PageElement.located(By.css('[data-test="error"]')).describedAs('login error message'),
    errorDismissButton: () => PageElement.located(By.css('[data-test="error-button"]')).describedAs('error dismiss button'),
};
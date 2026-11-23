import { Answerable, Task, the } from '@serenity-js/core';
import { Clear, Click, Enter, isVisible, Navigate, Wait } from '@serenity-js/web';

import { LoginPage } from '../ui/LoginPage';

export const SauceDemoCredentials = {
    standardUser: 'standard_user',
    lockedOutUser: 'locked_out_user',
    problemUser: 'problem_user',
    performanceGlitchUser: 'performance_glitch_user',
    errorUser: 'error_user',
    visualUser: 'visual_user',
    defaultPassword: 'secret_sauce',
} as const;

export const Login = {
    toSauceDemoAs: (
        username: Answerable<string>,
        password: Answerable<string> = SauceDemoCredentials.defaultPassword,
    ): Task =>
        Task.where(the`#actor navigates to SauceDemo and logs in as ${ username }`,
            Navigate.to('https://www.saucedemo.com/'),
            Login.as(username, password),
        ),
    toSauceDemoAsStandardUser: (): Task =>
        Login.toSauceDemoAs(
            SauceDemoCredentials.standardUser,
            SauceDemoCredentials.defaultPassword,
        ),
    as: (
        username: Answerable<string>,
        password: Answerable<string> = SauceDemoCredentials.defaultPassword,
    ): Task =>
        Task.where(the`#actor logs in as ${ username }`,
            Wait.until(LoginPage.usernameInput(), isVisible()),
            Clear.theValueOf(LoginPage.usernameInput()),
            Enter.theValue(username).into(LoginPage.usernameInput()),
            Clear.theValueOf(LoginPage.passwordInput()),
            Enter.theValue(password).into(LoginPage.passwordInput()),
            Click.on(LoginPage.loginButton()),
        ),
    asStandardUser: (): Task =>
        Login.as(
            SauceDemoCredentials.standardUser,
            SauceDemoCredentials.defaultPassword,
        ),
    asLockedOutUser: (): Task =>
        Login.as(
            SauceDemoCredentials.lockedOutUser,
            SauceDemoCredentials.defaultPassword,
        ),
    asProblemUser: (): Task =>
        Login.as(
            SauceDemoCredentials.problemUser,
            SauceDemoCredentials.defaultPassword,
        ),
    asPerformanceGlitchUser: (): Task =>
        Login.as(
            SauceDemoCredentials.performanceGlitchUser,
            SauceDemoCredentials.defaultPassword,
        ),
    asErrorUser: (): Task =>
        Login.as(
            SauceDemoCredentials.errorUser,
            SauceDemoCredentials.defaultPassword,
        ),
    asVisualUser: (): Task =>
        Login.as(
            SauceDemoCredentials.visualUser,
            SauceDemoCredentials.defaultPassword,
        ),
};

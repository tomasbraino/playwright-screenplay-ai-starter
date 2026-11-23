import { Task } from '@serenity-js/core';
import { PostRequest, Send } from '@serenity-js/rest';

export interface AuthResponse {
    token: string;
}

export const AuthenticateBookingApi = {
    asAdmin: (username = 'admin', password = 'password123') =>
        Task.where(
            `#actor authenticates against Restful-Booker API as ${username}`,
            Send.a(
                PostRequest.to('/auth').with({
                    username,
                    password,
                }),
            ),
        ),
};

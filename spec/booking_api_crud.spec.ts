import { Ensure, equals, isGreaterThan } from '@serenity-js/assertions';
import { describe, test } from '@serenity-js/playwright-test';
import { LastResponse } from '@serenity-js/rest';

import {
    CreatedBookingFirstname,
    CreatedBookingId,
} from './booking-api/questions';
import {
    AuthenticateBookingApi,
    AuthResponse,
    BookingPayload,
    CreateBooking,
    DeleteBooking,
    GetBooking,
} from './booking-api/tasks';

describe('Restful-Booker API CRUD & Auth (ScreenPlay)', () => {

    test.use({
        baseURL: 'https://restful-booker.herokuapp.com',
    });

    const validBooking: BookingPayload = {
        firstname: 'Tomas',
        lastname: 'Brainovich',
        totalprice: 250,
        depositpaid: true,
        bookingdates: {
            checkin: '2026-12-01',
            checkout: '2026-12-05',
        },
        additionalneeds: 'Late checkout',
    };

    describe('Equivalence Partitioning — Happy Path & Teardown', () => {

        test('creates, retrieves, and cleans up a booking via REST API', async ({ actorCalled }) => {
            const apiClient = actorCalled('ApiClient');

            await apiClient.attemptsTo(
                AuthenticateBookingApi.asAdmin(),
                Ensure.that(LastResponse.status(), equals(200)),
            );

            const authBody = await LastResponse.body<AuthResponse>().answeredBy(apiClient);

            await apiClient.attemptsTo(
                CreateBooking.withDetails(validBooking),
                Ensure.that(LastResponse.status(), equals(200)),
                Ensure.that(CreatedBookingId(), isGreaterThan(0)),
                Ensure.that(CreatedBookingFirstname(), equals('Tomas')),
            );

            const bookingId = await CreatedBookingId().answeredBy(apiClient);

            await apiClient.attemptsTo(
                GetBooking.byId(bookingId),
                Ensure.that(LastResponse.status(), equals(200)),
            );

            await apiClient.attemptsTo(
                DeleteBooking.byId(bookingId, authBody.token),
                Ensure.that(LastResponse.status(), equals(201)),
            );
        });
    });

    describe('Negative Testing & Error Guessing', () => {

        test('rejects deletion when authentication token is invalid', async ({ actorCalled }) => {
            await actorCalled('UnauthorizedClient').attemptsTo(
                DeleteBooking.byId(1, 'invalid_token'),
                Ensure.that(LastResponse.status(), equals(403)),
            );
        });
    });
});

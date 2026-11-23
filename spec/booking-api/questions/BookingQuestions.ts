import { Question } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';

export interface BookingCreatedResponse {
    bookingid: number;
    booking: {
        firstname: string;
        lastname: string;
        totalprice: number;
        depositpaid: boolean;
        bookingdates: {
            checkin: string;
            checkout: string;
        };
        additionalneeds?: string;
    };
}

export const CreatedBookingId = () =>
    Question.about<number>('created booking id', async (actor) => {
        const body = await LastResponse.body<BookingCreatedResponse>().answeredBy(actor);
        return body.bookingid;
    });

export const CreatedBookingFirstname = () =>
    Question.about<string>('created booking firstname', async (actor) => {
        const body = await LastResponse.body<BookingCreatedResponse>().answeredBy(actor);
        return body.booking.firstname;
    });
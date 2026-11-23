import { Task } from '@serenity-js/core';
import { PostRequest, Send } from '@serenity-js/rest';

export interface BookingPayload {
    firstname: string;
    lastname: string;
    totalprice: number;
    depositpaid: boolean;
    bookingdates: {
        checkin: string;
        checkout: string;
    };
    additionalneeds?: string;
}

export const CreateBooking = {
    withDetails: (payload: BookingPayload) =>
        Task.where(
            `#actor creates a booking for ${payload.firstname} ${payload.lastname}`,
            Send.a(
                PostRequest.to('/booking')
          .with(payload)
          .using({
              headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
              },
          }),
            ),
        ),
};

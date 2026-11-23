import { Task } from '@serenity-js/core';
import { GetRequest, Send } from '@serenity-js/rest';

export const GetBooking = {
    byId: (bookingId: number | string) =>
        Task.where(
            `#actor retrieves booking with id ${bookingId}`,
            Send.a(
                GetRequest.to(`/booking/${bookingId}`).using({
                    headers: {
                        Accept: 'application/json'},
                }),
            ),
        ),
};

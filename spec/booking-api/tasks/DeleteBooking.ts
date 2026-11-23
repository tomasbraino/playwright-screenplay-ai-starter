import { Task } from '@serenity-js/core';
import { DeleteRequest, Send } from '@serenity-js/rest';

export const DeleteBooking = {
    byId: (bookingId: number | string, token: string) =>
        Task.where(
            `#actor deletes booking with id ${bookingId}`,
            Send.a(
                DeleteRequest.to(`/booking/${bookingId}`).using({
                    headers: {
                        Cookie: `token=${token}`,
                    },
                }),
            ),
        ),
};

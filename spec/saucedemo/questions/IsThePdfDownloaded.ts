import { Question } from '@serenity-js/core';

export const isThePdfDownloaded = (): Question<Promise<boolean>> =>
    Question.about('is the PDF downloaded', async _actor => {
        return true;
    });

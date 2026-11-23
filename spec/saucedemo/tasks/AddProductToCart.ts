import { Answerable, Task, the } from '@serenity-js/core';
import { Click } from '@serenity-js/web';

import { HomePage } from '../ui/HomePage';

export const AddProductToCart = {
    called: (productIdentifier: Answerable<string>): Task =>
        Task.where(the`#actor adds ${ productIdentifier } to the shopping cart`,
            Click.on(HomePage.addToCartButtonFor(productIdentifier)),
        ),
};

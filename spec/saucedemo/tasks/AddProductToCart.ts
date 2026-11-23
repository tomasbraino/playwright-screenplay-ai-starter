import { Answerable, Task, the } from '@serenity-js/core';
import { Click } from '@serenity-js/web';

import { HomePage } from '../ui/HomePage';

export const AddProductToCart = {
    called: (...productNames: Array<Answerable<string>>): Task =>
        Task.where(the`#actor adds ${ productNames.length } product(s) to the shopping cart`,
            ...productNames.map(name =>
                Task.where(the`#actor adds product "${ name }" to the shopping cart`,
                    Click.on(HomePage.addToCartButtonOf(HomePage.itemCalled(name))),
                ),
            ),
        ),

    withIdentifier: (productIdentifier: Answerable<string>): Task =>
        Task.where(the`#actor adds ${ productIdentifier } to the shopping cart`,
            Click.on(HomePage.addToCartButtonFor(productIdentifier)),
        ),
};

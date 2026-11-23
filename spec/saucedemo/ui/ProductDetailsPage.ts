import { By, PageElement } from '@serenity-js/web';

export const ProductDetailsPage = {
    backToProductsButton: () =>
        PageElement.located(By.css('[data-test="back-to-products"]'))
            .describedAs('back to products button'),

    productName: () =>
        PageElement.located(By.css('[data-test="inventory-item-name"]'))
            .describedAs('product details name'),

    productDescription: () =>
        PageElement.located(By.css('[data-test="inventory-item-desc"]'))
            .describedAs('product details description'),

    productPrice: () =>
        PageElement.located(By.css('[data-test="inventory-item-price"]'))
            .describedAs('product details price'),

    productImage: () =>
        PageElement.located(By.css('.inventory_details_img'))
            .describedAs('product details image'),

    addToCartButton: () =>
        PageElement.located(By.css('[data-test="add-to-cart"]'))
            .describedAs('add to cart button'),

    removeButton: () =>
        PageElement.located(By.css('[data-test="remove"]'))
            .describedAs('remove button'),
};

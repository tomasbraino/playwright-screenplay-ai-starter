import { includes } from '@serenity-js/assertions';
import { Answerable, d, QuestionAdapter } from '@serenity-js/core';
import { By, PageElement, PageElements, Text } from '@serenity-js/web';

export const HomePage = {
    headerTitle: () =>
        PageElement.located(By.css('[data-test="title"]'))
            .describedAs('page title'),

    appLogo: () =>
        PageElement.located(By.css('.app_logo'))
            .describedAs('app logo'),

    shoppingCartLink: () =>
        PageElement.located(By.css('[data-test="shopping-cart-link"]'))
            .describedAs('shopping cart link'),

    shoppingCartBadge: () =>
        PageElement.located(By.css('[data-test="shopping-cart-badge"]'))
            .describedAs('shopping cart badge'),

    productSortDropdown: () =>
        PageElement.located(By.css('[data-test="product-sort-container"]'))
            .describedAs('product sort dropdown'),

    activeSortOption: () =>
        PageElement.located(By.css('[data-test="active-option"]'))
            .describedAs('active sort option'),

    inventoryContainer: () =>
        PageElement.located(By.id('inventory_container'))
            .describedAs('inventory container'),

    inventoryList: () =>
        PageElement.located(By.css('[data-test="inventory-list"]'))
            .describedAs('inventory list'),

    inventoryItems: () =>
        PageElements.located(By.css('[data-test="inventory-item"]'))
            .describedAs('inventory items'),

    itemCalled: (name: Answerable<string>) =>
        PageElements.located(By.css('[data-test="inventory-item"]'))
            .where(Text, includes(name))
            .first()
            .describedAs(d`product item called ${ name }`) as QuestionAdapter<PageElement>,

    itemName: (item: Answerable<PageElement>) =>
        PageElement.located(By.css('[data-test="inventory-item-name"]'))
            .of(item)
            .describedAs('inventory item name'),

    itemDescription: (item: Answerable<PageElement>) =>
        PageElement.located(By.css('[data-test="inventory-item-desc"]'))
            .of(item)
            .describedAs('inventory item description'),

    itemPrice: (item: Answerable<PageElement>) =>
        PageElement.located(By.css('[data-test="inventory-item-price"]'))
            .of(item)
            .describedAs('inventory item price'),

    addToCartButtonFor: (itemIdentifier: Answerable<string>) =>
        PageElement.located(By.css(`[data-test="add-to-cart-${ itemIdentifier }"]`))
            .describedAs(d`add to cart button for ${ itemIdentifier }`),

    addToCartButtonOf: (item: Answerable<PageElement>) =>
        PageElement.located(By.css('button[data-test^="add-to-cart"]'))
            .of(item)
            .describedAs('add to cart button'),

    removeButtonFor: (itemIdentifier: Answerable<string>) =>
        PageElement.located(By.css(`[data-test="remove-${ itemIdentifier }"]`))
            .describedAs(d`remove button for ${ itemIdentifier }`),

    removeButtonOf: (item: Answerable<PageElement>) =>
        PageElement.located(By.css('button[data-test^="remove"]'))
            .of(item)
            .describedAs('remove button'),

    openMenuButton: () =>
        PageElement.located(By.id('react-burger-menu-btn'))
            .describedAs('open menu button'),

    closeMenuButton: () =>
        PageElement.located(By.id('react-burger-cross-btn'))
            .describedAs('close menu button'),

    allItemsLink: () =>
        PageElement.located(By.css('[data-test="inventory-sidebar-link"]'))
            .describedAs('all items sidebar link'),

    aboutLink: () =>
        PageElement.located(By.css('[data-test="about-sidebar-link"]'))
            .describedAs('about sidebar link'),

    logoutLink: () =>
        PageElement.located(By.css('[data-test="logout-sidebar-link"]'))
            .describedAs('logout sidebar link'),

    resetAppStateLink: () =>
        PageElement.located(By.css('[data-test="reset-sidebar-link"]'))
            .describedAs('reset app state sidebar link'),
};

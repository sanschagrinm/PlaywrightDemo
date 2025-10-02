import {
    type Locator,
    type Page,
} from "@playwright/test";

// Here we define login class
// this class contains locator and functions to use as keyword to test the login page
export class items {
    readonly page: Page;
    readonly title: Locator;
    readonly addBackPackToCartButton: Locator;
    readonly removeBackPackToCartButton: Locator;
    readonly addBikeLightToCartButton: Locator;
    readonly removeBikeLightToCartButton: Locator;
    readonly addBoltTShirtToCartButton: Locator;
    readonly removeBoltTShirtToCartButton: Locator;
    readonly addFleeceJacketToCartButton: Locator;
    readonly removeFleeceJacketToCartButton: Locator;
    readonly addOnesieToCartButton: Locator;
    readonly removeOnesieToCartButton: Locator;
    readonly addRedTshirtToCartButton: Locator;
    readonly removeRedTshirtToCartButton: Locator;
    readonly shoppingCartBadge: Locator;
    readonly inventoryItemclass: Locator;
    readonly inventoryItemsNames: Locator;
    readonly inventoryItemPrice: Locator;
    readonly sortingButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.title =  page.locator(".title");
        this.addBackPackToCartButton = page.locator('button[name="add-to-cart-sauce-labs-backpack"]');
        this.removeBackPackToCartButton = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.addBikeLightToCartButton = page.locator('button[name="add-to-cart-sauce-labs-bike-light"]');
        this.removeBikeLightToCartButton = page.locator('button[name="remove-sauce-labs-bike-light"]');
        this.addBoltTShirtToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.removeBoltTShirtToCartButton = page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')
        this.addFleeceJacketToCartButton = page.locator('#add-to-cart-sauce-labs-fleece-jacket');
        this.removeFleeceJacketToCartButton = page.locator('#remove-sauce-labs-fleece-jacket');
        this.addOnesieToCartButton = page.locator('#add-to-cart-sauce-labs-onesie');
        this.removeOnesieToCartButton = page.locator('#remove-sauce-labs-onesie');
        this.addRedTshirtToCartButton = page.locator('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]');
        this.removeRedTshirtToCartButton = page.locator('[id="remove-test.allthethings()-t-shirt-(red)"]');
        this.shoppingCartBadge = page.locator('.shopping_cart_badge');
        this.inventoryItemclass= page.locator('.inventory_item')
        this.inventoryItemsNames = page.locator('.inventory_item_name ');
        this.sortingButton = page.locator('.product_sort_container');
        this.inventoryItemPrice = page.locator('.inventory_item_price');
    }

    async addItemsToCart(Locators: (Locator) []) {
        for(const item of Locators) {
            await item.click();
        }
    }

}

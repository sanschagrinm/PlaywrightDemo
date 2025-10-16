import {
    type Locator,
    type Page,
} from "@playwright/test";

// Here we define items shopping page
// this class contains locator and functions to use as keyword to test the items shopping page
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
    readonly fleeceJacketImg: Locator;
    readonly backpackImg: Locator;
    readonly boltTshirtImg: Locator;
    readonly redTshirtImg: Locator;
    readonly bikeLightImg: Locator;
    readonly onesieImg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title =  page.locator(".title");

        // Buttons locator
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
        //Other locators
        this.shoppingCartBadge = page.locator('.shopping_cart_badge');
        this.inventoryItemclass= page.locator('.inventory_item')
        this.inventoryItemsNames = page.locator('.inventory_item_name ');
        this.sortingButton = page.locator('.product_sort_container');
        this.inventoryItemPrice = page.locator('.inventory_item_price');
        //Product Images locators
        this.fleeceJacketImg = page.locator('[data-test="inventory-item-sauce-labs-fleece-jacket-img"]');
        this.backpackImg = page.locator('[data-test="inventory-item-sauce-labs-backpack-img"]');
        this.boltTshirtImg = page.locator('[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]');
        this.redTshirtImg = page.locator('[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]');
        this.bikeLightImg = page.locator('[data-test="inventory-item-sauce-labs-bike-light-img"]');
        this.onesieImg = page.locator('[data-test="inventory-item-sauce-labs-onesie-img"]');

    }

    // Function to add a list of items to cart.
    async addItemsToCart(Locators: (Locator) []) {
        for(const item of Locators) {
            await item.click();
        }
    }

}

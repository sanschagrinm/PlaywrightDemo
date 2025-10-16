import {

    type Locator,
    type Page,
} from "@playwright/test";

// Here we define shopping cart page
// this class contains locator and functions to use as keyword to test the shopping cart page
export class cart {
    readonly page: Page;
    readonly continueShoppingButton: Locator;
    readonly checkoutButton: Locator;
    //general classes
    readonly cartList: Locator;
    readonly cartItems: Locator;

    //individual cart items
    readonly CartItem1Title: Locator;
    readonly CartItem2Title: Locator;
    readonly CartItem3Title: Locator;
    readonly CartItem4Title: Locator;
    readonly CartItem5Title: Locator;
    readonly CartItem6Title: Locator;


    constructor(page: Page) {
        this.page = page;
        this.continueShoppingButton = page.locator("#continue-shopping")
        this.checkoutButton = page.locator('[name="checkout"]');        //locator for Continue shopping button
        this.cartList = page.locator(".cart_list");                   //locator for item list in cart
        this.cartItems = page.locator('[data-test="cart-list"] [data-test="inventory-item-name"]');
        this.CartItem1Title = page.locator('#item_0_title_link');
        this.CartItem2Title = page.locator('#item_1_title_link');
        this.CartItem3Title = page.locator('#item_2_title_link');
        this.CartItem4Title = page.locator('#item_3_title_link');
        this.CartItem5Title = page.locator('#item_4_title_link');
        this.CartItem6Title = page.locator('#item_5_title_link');
    }

    // fonction pour envoyer le navigateur vers un URL donné en paramètre
    async goTo(loginUrl: string) {
        await this.page.goto(loginUrl);
    }

    // login function. the function uses username and password as parameters
    async verifyCartOrder(Locators: (Locator) []) {
        const count = Locators.length;

        for (let i = 0; i < count; i++) {
            const name = await this.cartItems.nth(i).innerText();
        }

    }

}
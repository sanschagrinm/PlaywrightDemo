import {
    expect,
    FrameLocator,
    type Locator,
    type Page,
} from "@playwright/test";

// Here we define login class
// this class contains locator and functions to use as keyword to test the login page
export class login {
    readonly page: Page;
    readonly usernameTextbox: Locator;
    readonly passwordTextbox: Locator;
    readonly loginButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.usernameTextbox = page.getByTestId("username");                           //locator for username field
        this.passwordTextbox = page.locator("#password");                           //locator for password field
        this.loginButton = page.locator(".submit-button btn_action");                //locator for login button
    }

    // fonction pour envoyer le navigateur vers un URL donné en paramètre
    async goTo(loginUrl: string) {
        await this.page.goto(loginUrl);
    }

    // login function. the function uses username and password as parameters
    async login(username: string, password: string) {

    }

    // a login without password function to test error message displayed when wrongly logging in the website
    async loginWithoutPassword(username: string) {
        await this.usernameTextbox.fill(username);
        await this.loginButton.click();
    }
}

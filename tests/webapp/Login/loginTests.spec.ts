import {test, expect} from '@playwright/test';
import {login} from "../../../Pages/components/login";
import {items} from "../../../Pages/components/items";

// define const called in function parameters
const url = process.env.SAUCE_URL;
const standard_username = process.env.STANDARD_USER;
const locked_out_username = process.env.LOCKED_OUT_USER;
const password = process.env.PASSWORD;

test('loginTests for standard user', async ({page}) => {

    // create new instances of class created from POM.
    const loginPage = new login(page);
    const itemsPage = new items(page);

    await loginPage.goTo(url);
    await loginPage.login(standard_username, password);
    await expect(itemsPage.title).toBeVisible();
});

test('loginTests without password', async ({page}) => {

    // create new instances of class created from POM.
    const loginPage = new login(page);
    const itemsPage = new items(page);

    await loginPage.goTo(url);
    await loginPage.loginWithoutPassword(standard_username);
    await expect(loginPage.errorMsg).toContainText("Password is required");
});

test('loginTests with wrong password', async ({page}) => {

    // create new instances of class created from POM.
    const loginPage = new login(page);
    const itemsPage = new items(page);

    await loginPage.goTo(url);
    await loginPage.login(standard_username, password +"1");
    await expect(loginPage.errorMsg).toContainText("Username and password do not match any user in this service");
});

test('loginTests with locked out user', async ({page}) => {

    // create new instances of class created from POM.
    const loginPage = new login(page);
    const itemsPage = new items(page);

    await loginPage.goTo(url);
    await loginPage.login(locked_out_username, password);
    await expect(loginPage.errorMsg).toContainText("Sorry, this user has been locked out.");
});
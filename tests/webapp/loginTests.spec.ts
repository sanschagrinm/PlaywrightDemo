import {test, expect} from '@playwright/test';
import {login} from "../../Pages/components/login";

test('loginTests', async ({page}) => {

    const loginPage = new login(page);
    const url = process.env.SAUCE_URL;
    const username = process.env.STANDARD_USER;
    const password = process.env.PASSWORD;

    await loginPage.goTo(url);
    await loginPage.login(username, password);
});
import {test as setup, expect} from '@playwright/test';
import path = require('path');
import {login} from "../../Pages/components/login";
import {items} from "../../Pages/components/items";

const authStandardUser = path.join(__dirname, '../.auth/standardUser.json');

//Play login with standard user before running tests so we can load the storage state and already be logged in when executing test
//This saves us from logging in before every test with this user.
setup ('authenticate standard user', async ({page, context}) => {

   //initiate pages class from POM
    const loginPage = new login(page);
    const itemsPage = new items(page);

    //import environment variables
    const url = process.env.SAUCE_URL;
    const standard_username = process.env.STANDARD_USER;
    const password = process.env.PASSWORD;

    await loginPage.goTo(url);
    await loginPage.login(standard_username, password);
    await expect(itemsPage.title).toBeVisible();

    //Create .json file containing storage state informations such as acces token.
    await context.storageState({path: authStandardUser});
})
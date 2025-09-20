import {test, expect} from '@playwright/test';

// define const called in function parameters
const url = process.env.SAUCE_URL;
const storageStateFile = "../.auth/standardUser.json";

    test('add items to cart', async ({page}) => {
        test.use({ storageState: storageStateFile });
        await page.goto(url);


    });
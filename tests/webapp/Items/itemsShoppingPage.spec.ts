import {test, expect} from '@playwright/test';
import {items} from "../../../Pages/components/items";

// define const called in function parameters
const url = process.env.SAUCE_INVENTORY_URL;
const storageStateFile = "tests/.auth/standardUser.json";

test.use({ storageState: storageStateFile });

test('Verify Nb of Items in cart', async ({page}) => {
    const itemsPage = new items(page);
    const itemsList = [itemsPage.addOnesieToCartButton, itemsPage.addBikeLightToCartButton, itemsPage.addFleeceJacketToCartButton];
    await page.goto(url);

    await itemsPage.addItemsToCart(itemsList);
    const nbOfItemsString = await itemsPage.shoppingCartBadge.textContent();
    const nbOfItems = Number(nbOfItemsString);
    await expect(nbOfItems).toEqual(itemsList.length);
    });

test('Verify remove button is displayed after adding to cart', async ({page}) => {
    const itemsPage = new items(page);
    await page.goto(url);

    expect(await itemsPage.addBackPackToCartButton).toBeVisible();
    await itemsPage.addBackPackToCartButton.click();
    expect (await itemsPage.removeBackPackToCartButton).toBeVisible();

    expect(await itemsPage.addFleeceJacketToCartButton).toBeVisible();
    await itemsPage.addFleeceJacketToCartButton.click();
    expect(await itemsPage.removeFleeceJacketToCartButton).toBeVisible();

    expect(await itemsPage.addBikeLightToCartButton).toBeVisible();
    await itemsPage.addBikeLightToCartButton.click();
    expect(await itemsPage.removeBikeLightToCartButton).toBeVisible();

    expect(await itemsPage.addOnesieToCartButton).toBeVisible();
    await itemsPage.addOnesieToCartButton.click();
    expect(await itemsPage.removeOnesieToCartButton).toBeVisible();

    expect(await itemsPage.addBoltTShirtToCartButton).toBeVisible();
    await itemsPage.addBoltTShirtToCartButton.click();
    expect(await itemsPage.removeBoltTShirtToCartButton).toBeVisible();

    expect(await itemsPage.addRedTshirtToCartButton).toBeVisible();
    await itemsPage.addRedTshirtToCartButton.click();
    expect(await itemsPage.removeRedTshirtToCartButton).toBeVisible();
});

test('Sorting Name A to Z', async ({page}) => {
    const itemsPage = new items(page);
    await page.goto(url);

    const itemsNamesList = await itemsPage.inventoryItemsNames.allTextContents();
    console.log(itemsNamesList);
    const sortedItemsNames =  itemsNamesList.sort();
    await expect(sortedItemsNames).toEqual(itemsNamesList);
    console.log(sortedItemsNames);
});

test('Sorting Name Z to A', async ({page}) => {
    const itemsPage = new items(page);
    await page.goto(url);

    await itemsPage.sortingButton.selectOption('za');
    const itemsNamesList = await itemsPage.inventoryItemsNames.allTextContents();
    console.log("liste sur la page: " + itemsNamesList);
    const sortedItemsNames =  itemsNamesList.sort((a, b) => b.localeCompare(a));
    await expect(sortedItemsNames).toEqual(itemsNamesList);
    console.log("liste triée: " + sortedItemsNames);
});

test('Sorting price low to high', async ({page}) => {
    const itemsPage = new items(page);
    await page.goto(url);

    await itemsPage.sortingButton.selectOption('lohi');
    const itemsPriceList = await itemsPage.inventoryItemPrice.allTextContents();
    const cleanPriceList = itemsPriceList.map(price => parseFloat(price.replace('$', '')));
    console.log (cleanPriceList);

    for (let i = 0; i < cleanPriceList.length - 1; i++) {
        await expect(cleanPriceList[i]).toBeLessThanOrEqual(cleanPriceList[i + 1]);
    }
});

test('Sorting price high to low', async ({page}) => {
    const itemsPage = new items(page);
    await page.goto(url);

    await itemsPage.sortingButton.selectOption('hilo');
    const itemsPriceList = await itemsPage.inventoryItemPrice.allTextContents();
    const cleanPriceList = itemsPriceList.map(price => parseFloat(price.replace('$', '')));
    console.log (cleanPriceList);

    for (let i = 0; i < cleanPriceList.length - 1; i++) {
        await expect(cleanPriceList[i]).toBeGreaterThanOrEqual(cleanPriceList[i + 1]);
    }
});
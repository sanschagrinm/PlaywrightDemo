import {
    expect,
    FrameLocator,
    type Locator,
    type Page,
} from "@playwright/test";

// Here we define login class
// this class contains locator and functions to use as keyword to test the login page
export class items {
    readonly page: Page;
    readonly title: Locator;


    constructor(page: Page) {
        this.page = page;
        this.title =  page.locator(".title");
    }

}

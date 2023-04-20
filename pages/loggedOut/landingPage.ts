import { Locator, Page } from "@playwright/test";
export default class LandingPage {

    private readonly signUpNav: Locator;
    private readonly loginNav: Locator;

    constructor(public page: Page) {
        this.signUpNav = page.locator('.nav-link[href="/signup"]');
        this.loginNav = page.locator('.nav-link[href="/login"]');
    }

    async clickOnSignUpNav() {
        await this.signUpNav.click();
    }


    async clickOnLoginNav() {
        await this.loginNav.click();
    }
}
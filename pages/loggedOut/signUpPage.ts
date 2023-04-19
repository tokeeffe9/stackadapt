import { Locator, Page } from "@playwright/test";
import LandingPage from "./landingPage";

export default class SignUpPage extends LandingPage {

    readonly signUpNav: Locator;
    readonly passwordInput: Locator;

    constructor(public page: Page) {
        super(page);
        this.signUpNav = page.locator('.nav-link[href="/signup"]');
        this.passwordInput = page.locator('.nav-link[href="/login"]');
    }

    async clickOnSignUpNav(){
        await this.signUpNav.click();
    }

    
    async clickOnLoginNav(){
        await this.passwordInput.click();
    }
}
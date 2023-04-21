import type { Locator, Page } from "@playwright/test";
import LandingPage from "./landingPage";

export default class LoginPage extends LandingPage {

    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly rememberMe: Locator;
    private readonly signIn: Locator;
    private readonly invalidAlert: Locator;

    constructor(public page: Page) {

        super(page);
        this.emailInput = page.locator('#login');
        this.passwordInput = page.locator('#password');
        this.rememberMe = page.locator('.checkbox label');
        this.signIn = page.locator('#submit');
        this.invalidAlert = page.locator('.alert');
    }

    async logInWithAccountDetails(email: string, password: string, rememberMe?: boolean) {

        await this.enterEmail(email);
        await this.enterPassword(password);
        if (rememberMe) {
            await this.clickRememberMe();
        }
        await this.clickSignIn();
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickRememberMe() {
        await this.rememberMe.click();
    }

    async clickSignIn() {
        await this.page.waitForTimeout(1000);
        await this.signIn.click();
    }

    async getAlertMessage() {
        return (await this.invalidAlert.innerText()).trim();
    }
}
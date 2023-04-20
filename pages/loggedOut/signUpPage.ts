import { Locator, Page } from "@playwright/test";
import LandingPage from "./landingPage";

export default class SignUpPage extends LandingPage {

    private readonly nameInput: Locator;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly termsCheckbox: Locator;
    private readonly signUpButton: Locator;
    private readonly nameValidation: Locator;
    private readonly emailValidation: Locator;
    private readonly passwordValidation: Locator;
    private readonly termsValidation: Locator;

    constructor(public page: Page) {

        super(page);
        this.nameInput = page.locator('#name');
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.termsCheckbox = page.locator('#agree');
        this.signUpButton = page.locator('#submit');
        this.nameValidation = page.locator('.error[for="name"]');
        this.emailValidation = page.locator('.error[for="email"]');
        this.passwordValidation = page.locator('.error[for="password"]');
        this.termsValidation = page.locator('.error[for="agree"]');
    }

    async enterName(name: string) {
        await this.nameInput.fill(name);
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async toggleTerms() {
        await this.termsCheckbox.check();
    }

    async clickSignUp() {
        await this.signUpButton.click();
    }

    async getNameValidation() {
        return await this.nameValidation.textContent();
    }

    async getEmailValidation() {
        return await this.emailValidation.textContent();
    }

    async getPasswordValidation() {
        return await this.passwordValidation.textContent();
    }

    async getTermsValidation() {
        return await this.termsValidation.textContent();
    }

}
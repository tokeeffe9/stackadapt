import { Locator, Page } from "@playwright/test";
import NavigationPage from "./navigationPage";
export default class PasswordPage extends NavigationPage {

    private readonly currentPasswordTextbox: Locator;
    private readonly newPasswordTextbox: Locator;
    private readonly repeatPasswordTextbox: Locator;
    private readonly update: Locator;
    private readonly passwordUpdateAlert: Locator;

    constructor(public page: Page) {

        super(page);
        this.currentPasswordTextbox = page.locator('#password');
        this.newPasswordTextbox = page.locator('#new_password');
        this.repeatPasswordTextbox = page.locator('#password_again');
        this.update = page.locator('#submit');
        this.passwordUpdateAlert = page.locator('.alert');
    }

    async updatePasswordDetails(password: string, newPassword: string) {

        await this.enterCurrentPassword(password);
        await this.enterNewPassword(newPassword);
        await this.enterRepeatedPassword(newPassword);
        await this.clickUpdate();
    }

    async enterCurrentPassword(password: string) {
        await this.currentPasswordTextbox.fill(password);
    }

    async enterNewPassword(newPassword: string) {
        await this.newPasswordTextbox.fill(newPassword);
    }

    async enterRepeatedPassword(newPassword: string) {
        await this.repeatPasswordTextbox.fill(newPassword);
    }

    async clickUpdate() {
        return await this.update.click();
    }

    async getPasswordUpdatedAlertText() {

        const text = this.passwordUpdateAlert.innerText();
        return await text;
    }
}
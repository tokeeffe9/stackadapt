import type { Locator, Page } from "@playwright/test";
export default class NavigationPage {

    private readonly myAccount: Locator;
    private readonly tasks: Locator;
    private readonly addTasks: Locator;
    private readonly changePassword: Locator;
    private readonly logOut: Locator

    constructor(public page: Page) {

        this.tasks = page.locator('#navbarDropdownPages').nth(0);
        this.myAccount = page.locator('#navbarDropdownPages').nth(1);
        this.changePassword = page.locator('.dropdown-item[href="/settings/password"]');
        this.logOut = page.locator('.dropdown-item[href="/logout"]');
        this.addTasks = page.locator('.dropdown-item[href="/tasks/add_task"]');
    }

    async getMyAccountName() {
        return await this.myAccount.textContent();
    }

    async navigateToChangePassword() {

        await this.page.waitForLoadState("networkidle");
        await this.myAccount.click();
        await this.changePassword.click();
    }

    async navigateToAndLogout() {

        await this.myAccount.click();
        await this.logOut.click();
    }

    async navigateToTasksAndAddTask() {

        await this.page.waitForLoadState("networkidle");
        await this.tasks.click();
        await this.addTasks.click();
    }
}
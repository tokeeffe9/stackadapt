import { Locator, Page } from "@playwright/test";
export default class NavigationPage {

    readonly myAccount: Locator;
    readonly tasks: Locator;

    constructor(public page: Page) {
        
        this.tasks = page.locator('#navbarDropdownPages').nth(0);
        this.myAccount = page.locator('#navbarDropdownPages').nth(1);
    }

    async getMyAccountName(){
        return await this.myAccount.textContent();
    }
}
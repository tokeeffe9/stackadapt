import { expect, test } from "../base/pomFixture";
import * as data from "../test-data/user-details.json";


test("Login test_01", async ({ page, baseURL, landingPage, loginPage, navigationPage }) => {

    // const register = new registerPage(page);
    await page.goto(`${baseURL}`);
    await landingPage.clickOnLoginNav();
    await loginPage.signInWithLoginDetails(data.email, data.password, false);

    expect(await navigationPage.getMyAccountName()).toBe(data.username);

});


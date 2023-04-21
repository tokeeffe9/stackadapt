import { expect, test } from "../base/pomFixture";
import * as data from "../test-data/user-details.json";

let jsonUserData: { email: string; password: string; username: string; expectedString: string; newPassword: string; };

test.beforeEach(async ({ page, baseURL, landingPage }, testInfo) => {
    jsonUserData = data[testInfo.title.split(" ")[0]];
    await page.goto(`${baseURL}`);
    await landingPage.clickOnLoginNav();
})

test("TC-01 :Verify user can login with valid details", async ({ loginPage, navigationPage, browserName, baseURL, page }) => {

    await loginPage.logInWithAccountDetails(browserName + '-' + jsonUserData.email, jsonUserData.password);
    expect(await navigationPage.getMyAccountName()).toBe(jsonUserData.username);
    expect(page.url()).toBe(`${baseURL}tasks/my_tasks`);
});

// test("TC-02 :Verify user is unable to login with invalid details", async ({ page, baseURL, loginPage }) => {

//     await loginPage.logInWithAccountDetails(jsonUserData.email, jsonUserData.password);
//     expect(await loginPage.getAlertMessage()).toContain(jsonUserData.expectedString);
//     expect(page.url()).toBe(`${baseURL}login`);
// });

// test("TC-03 :Verify user can update their account password and login with only their new details", async ({ page, baseURL, landingPage, loginPage, navigationPage, passwordPage, browserName }) => {

//     await loginPage.logInWithAccountDetails(browserName + '-' + jsonUserData.email, jsonUserData.password);
//     await navigationPage.navigateToChangePassword();
//     await passwordPage.updatePasswordDetails(jsonUserData.password, jsonUserData.newPassword);

//     expect(await passwordPage.getPasswordUpdatedAlertText()).toContain(jsonUserData.expectedString);
//     await passwordPage.navigateToAndLogout();

//     await landingPage.clickOnLoginNav();
//     await loginPage.logInWithAccountDetails(browserName + '-' + jsonUserData.email, jsonUserData.password);
//     expect(page.url()).toBe(`${baseURL}login`);
//     await loginPage.logInWithAccountDetails(browserName + '-' + jsonUserData.email, jsonUserData.newPassword);
//     expect(await navigationPage.getMyAccountName()).toBe(jsonUserData.username);
//     expect(page.url()).toBe(`${baseURL}tasks/my_tasks`);

//     //Resetting data
//     await navigationPage.navigateToChangePassword();
//     await passwordPage.updatePasswordDetails(jsonUserData.newPassword, jsonUserData.password);
// });
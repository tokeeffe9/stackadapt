import { expect, test } from "../base/pomFixture";
import * as data from "../test-data/user-details.json";

let testData: { email: string; password: string; username: string; expectedString: string; newPassword: string; };

test.beforeEach(async ({ page, baseURL, landingPage }, testInfo) => {
    testData = data[testInfo.title.split(" ")[0]];
    await page.goto(`${baseURL}`);
    await landingPage.clickOnLoginNav();
})

test("TC-01 :Verify user can login with valid details", async ({ loginPage, navigationPage, browserName }) => {

    await loginPage.logInWithAccountDetails(browserName + '-' + testData.email, testData.password);
    expect(await navigationPage.getMyAccountName()).toBe(testData.username);
});

test("TC-02 :Verify user is unable to login with invalid details", async ({ page, baseURL, loginPage }) => {

    await loginPage.logInWithAccountDetails(testData.email, testData.password);
    expect(await loginPage.getAlertMessage()).toContain(testData.expectedString);
    expect(page.url()).toBe(`${baseURL}login`);
});

test("TC-03 :Verify user can update their account password and login with only their new details", async ({ page, baseURL, landingPage, loginPage, navigationPage, passwordPage, browserName }) => {

    await loginPage.logInWithAccountDetails(browserName + '-' + testData.email, testData.password);
    await navigationPage.navigateToChangePassword();
    await passwordPage.updatePasswordDetails(testData.password, testData.newPassword);

    expect(await passwordPage.getPasswordUpdatedAlertText()).toContain(testData.expectedString);
    await passwordPage.navigateToAndLogout();

    await landingPage.clickOnLoginNav();
    await loginPage.logInWithAccountDetails(browserName + '-' + testData.email, testData.password);
    expect(page.url()).toBe(`${baseURL}login`);
    await loginPage.logInWithAccountDetails(browserName + '-' + testData.email, testData.newPassword);
    expect(await navigationPage.getMyAccountName()).toBe(testData.username);

    //Resetting data
    await navigationPage.navigateToChangePassword();
    await passwordPage.updatePasswordDetails(testData.newPassword, testData.password);
});
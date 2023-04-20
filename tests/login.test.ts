import { expect, test } from "../base/pomFixture";
import * as data from "../test-data/user-details.json";

test("Login_test_01", async ({ page, baseURL, landingPage, loginPage, navigationPage }, testInfo) => {

    const testData = data[testInfo.title];
    await page.goto(`${baseURL}`);
    await landingPage.clickOnLoginNav();
    await loginPage.logInWithAccountDetails(testData.email, testData.password);

    expect(await navigationPage.getMyAccountName()).toBe(testData.username);
});

test("Login_test_02", async ({ page, baseURL, landingPage, loginPage }, testInfo) => {

    const testData = data[testInfo.title];
    await page.goto(`${baseURL}`);
    await landingPage.clickOnLoginNav();
    await loginPage.logInWithAccountDetails(testData.email, testData.password);

    expect(await loginPage.getAlertMessage()).toBe(testData.expectedString);
    expect(page.url()).toBe(`${baseURL}login`);
});

test("Login_test_03", async ({ page, baseURL, landingPage, loginPage, navigationPage, passwordPage }, testInfo) => {

    const testData = data[testInfo.title];
    await page.goto(`${baseURL}`);
    await landingPage.clickOnLoginNav();
    await loginPage.logInWithAccountDetails(testData.email, testData.password);
    await navigationPage.navigateToChangePassword();
    await passwordPage.updatePasswordDetails(testData.password, testData.newPassword);

    expect(await passwordPage.getPasswordUpdatedAlertText()).toContain(testData.expectedString);
    await passwordPage.navigateToAndLogout();

    await landingPage.clickOnLoginNav();
    await loginPage.logInWithAccountDetails(testData.email, testData.password);
    expect(page.url()).toBe(`${baseURL}login`);
    await loginPage.logInWithAccountDetails(testData.email, testData.newPassword);
    expect(await navigationPage.getMyAccountName()).toBe(testData.username);
});
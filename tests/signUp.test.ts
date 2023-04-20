import { expect, test } from "../base/pomFixture";
import * as data from "../test-data/user-details.json";

test("TC-06 :Verify error validation for sign up process", async ({ page, baseURL, signUpPage }, testInfo) => {

    const testData = data[testInfo.title.split(" ")[0]];
    await page.goto(`${baseURL}signup`);
    await signUpPage.enterEmail(testData.email);
    await signUpPage.enterPassword(testData.password);
    await signUpPage.clickSignUp();
    expect(await signUpPage.getNameValidation()).toContain(testData.nameErrorMessage);
    expect(await signUpPage.getEmailValidation()).toContain(testData.emailErrorMessage);
    expect(await signUpPage.getPasswordValidation()).toContain(testData.passwordErrorMessage);
    expect(await signUpPage.getTermsValidation()).toContain(testData.termsErrorMessage);
});
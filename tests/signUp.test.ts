import { expect, test } from "../base/pomFixture";
import * as data from "../test-data/user-details.json";

test("TC-06 :Verify error validation for sign up process", async ({ page, baseURL, signUpPage }, testInfo) => {

    const jsonUserData = data[testInfo.title.split(" ")[0]];
    await page.goto(`${baseURL}signup`);
    await signUpPage.enterEmail(jsonUserData.email);
    await signUpPage.enterPassword(jsonUserData.password);
    await signUpPage.clickSignUp();

    expect(await signUpPage.getNameValidation()).toContain(jsonUserData.nameErrorMessage);
    expect(await signUpPage.getEmailValidation()).toContain(jsonUserData.emailErrorMessage);
    expect(await signUpPage.getPasswordValidation()).toContain(jsonUserData.passwordErrorMessage);
    expect(await signUpPage.getTermsValidation()).toContain(jsonUserData.termsErrorMessage);
});
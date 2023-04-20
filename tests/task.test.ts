import { expect, test } from "../base/pomFixture";
import * as data from "../test-data/user-details.json";

test("Delete_tasks_test_01", async ({ page, baseURL, landingPage, loginPage, myTasksPage }, testInfo) => {

    const testData = data[testInfo.title];
    await page.goto(`${baseURL}/login`);
    await landingPage.clickOnLoginNav();
    await loginPage.logInWithAccountDetails(testData.email, testData.password);
    expect(await myTasksPage.getNumberofTasks()).toBe(2);
    await myTasksPage.deleteAllTasks();
    expect(await myTasksPage.getMyTaskText(0)).toBe(testData.expectedString);
});

test("Add_tasks_test_01", async ({ page, baseURL, landingPage, loginPage, myTasksPage }, testInfo) => {

    const testData = data[testInfo.title];
    await page.goto(`${baseURL}/login`);
    await landingPage.clickOnLoginNav();
    await loginPage.logInWithAccountDetails(testData.email, testData.password);
    expect(await myTasksPage.getNumberofTasks()).toBe(0);
    await myTasksPage.clickAddATask();
    await myTasksPage.createYourTask(testData.task);
    expect(await myTasksPage.getMyTaskText(0)).toBe(testData.task);
    await myTasksPage.clickViewTask(0);
    expect(await myTasksPage.getViewedTaskText()).toBe(testData.task);
});
import { expect, test } from "../base/pomFixture";
import * as data from "../test-data/user-details.json";

let testData: { email: string; password: string; expectedNoOfTasks: number; expectedString: string; taskName: string; };

test.beforeEach(async ({ page, baseURL, landingPage, browserName, loginPage }, testInfo) => {

    testData = data[testInfo.title.split(" ")[0]];
    await page.goto(`${baseURL}login`);
    await landingPage.clickOnLoginNav();
    await loginPage.logInWithAccountDetails(browserName + '-' + testData.email, testData.password);
})


test("TC-04 : Verify user can delete tasks from their account", async ({ myTasksPage }) => {

    expect(await myTasksPage.getNumberofTasks()).toBe(testData.expectedNoOfTasks);
    await myTasksPage.deleteAllTasks();
    expect(await myTasksPage.getMyTaskText(0)).toBe(testData.expectedString);

    //Resetting data
    for (let i = 0; i < testData.expectedNoOfTasks; i++) {
        await myTasksPage.clickTasksAndAddTask();
        await myTasksPage.createYourTask("Task Number " + i);
    }
});

test("TC-05 : Verify user can add tasks to an empty account", async ({ page, baseURL, myTasksPage }) => {

    expect(await myTasksPage.getNumberofTasks()).toBe(0);
    await myTasksPage.clickAddATask();
    await myTasksPage.createYourTask(testData.taskName);
    expect(await myTasksPage.getMyTaskText(0)).toBe(testData.taskName);
    await myTasksPage.clickViewTask(0);
    expect(await myTasksPage.getViewedTaskText()).toBe(testData.taskName);

    //Resetting data
    await page.goto(`${baseURL}tasks/my_tasks`);
    await myTasksPage.deleteAllTasks();
});
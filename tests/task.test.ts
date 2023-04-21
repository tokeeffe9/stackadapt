import { expect, test } from "../base/pomFixture";
import * as data from "../test-data/user-details.json";

let jsonUserData: { email: string; password: string; initialNoOfTasks: number; noOfTasksToDelete: number, expectedString: string; taskName: string; };

test.beforeEach(async ({ page, baseURL, landingPage, browserName, loginPage }, testInfo) => {

    jsonUserData = data[testInfo.title.split(" ")[0]];
    await page.goto(`${baseURL}login`);
    await landingPage.clickOnLoginNav();
    await loginPage.logInWithAccountDetails(browserName + '-' + jsonUserData.email, jsonUserData.password);
})


test("TC-04 : Verify user can still have a remaining task after deleting multiple tasks", async ({ myTasksPage }) => {

    const initialNoOfTasks = jsonUserData.initialNoOfTasks;
    const remainingTasks = initialNoOfTasks - jsonUserData.noOfTasksToDelete;
    expect(await myTasksPage.getNumberofTasks()).toBe(initialNoOfTasks);

    for (let i = initialNoOfTasks - 1; i >= remainingTasks; i--) {
        await myTasksPage.deleteTaskByIndex(i);
    }
    expect(await myTasksPage.getMyTaskText(0)).toBe(jsonUserData.expectedString);
    expect(await myTasksPage.getNumberofTasks()).toBe(1);

    //Resetting data
    for (let i = 2; i <= initialNoOfTasks; i++) {
        await myTasksPage.navigateToTasksAndAddTask();
        await myTasksPage.createYourTask("Task Number " + i);
    }
});

test("TC-05 : Verify user can add tasks to an account with no tasks", async ({ page, baseURL, myTasksPage }) => {

    expect(await myTasksPage.getNumberofTasks()).toBe(0);
    await myTasksPage.clickAddATask();
    await myTasksPage.createYourTask(jsonUserData.taskName);
    expect(await myTasksPage.getMyTaskText(0)).toBe(jsonUserData.taskName);
    await myTasksPage.clickViewTask(0);
    expect(await myTasksPage.getViewedTaskDescription()).toBe(jsonUserData.taskName);

    //Resetting data
    await page.goto(`${baseURL}tasks/my_tasks`);
    await myTasksPage.deleteAllTasks();
});
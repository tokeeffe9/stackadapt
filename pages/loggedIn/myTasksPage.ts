import { Locator, Page } from "@playwright/test";
import NavigationPage from "./navigationPage";
export default class MyTasksPage extends NavigationPage {

    private readonly viewTask: Locator;
    private readonly deleteTask: Locator;
    private readonly taskText: Locator;
    private readonly addATask: Locator;
    private readonly yourTaskText: Locator;
    private readonly saveYourTask: Locator;
    private readonly viewedTaskText: Locator;

    constructor(public page: Page) {

        super(page);
        this.viewTask = page.locator('.btn-outline-primary');
        this.deleteTask = page.locator('.btn-outline-danger');
        this.taskText = page.locator('tbody > tr > td');
        this.addATask = page.locator('td>[href="/tasks/add_task"]');
        this.yourTaskText = page.locator('#task');
        this.saveYourTask = page.locator('#submit');
        this.viewedTaskText = page.locator('.card-text');
    }

    async deleteTaskByIndex(index: number) {
        
        await this.page.waitForLoadState("networkidle");
        await this.deleteTask.nth(index).click();
    }

    async deleteAllTasks() {

        const numberOfElements = await this.deleteTask.count();
        for (let i = 0; i < numberOfElements; i++) {
            await this.deleteTaskByIndex(0);
        }
    }

    async getMyTaskText(index: number) {
        return await this.taskText.nth(index).textContent();
    }

    async getNumberofTasks() {
        return await this.viewTask.count();
    }

    async clickAddATask() {
        await this.addATask.click();
    }

    async createYourTask(task: string) {

        await this.yourTaskText.fill(task);
        await this.saveYourTask.click();
    }

    async clickViewTask(index: number) {
        await this.viewTask.nth(index).click()
    }

    async getViewedTaskText() {
        return await this.viewedTaskText.textContent();
    }
}
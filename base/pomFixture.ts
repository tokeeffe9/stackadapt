import { test as baseTest } from "@playwright/test";
import LandingPage from "../pages/loggedOut/landingPage";
import LoginPage from "../pages/loggedOut/loginPage";
import SignUpPage from "../pages/loggedOut/signUpPage";
import NavigationPage from "../pages/loggedIn/navigationPage";
import MyTasksPage from "../pages/loggedIn/myTasksPage";
import PasswordPage from "../pages/loggedIn/passwordPage";


type pages = {
    landingPage: LandingPage;
    loginPage: LoginPage;
    signUpPage: SignUpPage;
    navigationPage: NavigationPage;
    myTasksPage: MyTasksPage;
    passwordPage: PasswordPage;
}

const testPages = baseTest.extend<pages>({

    landingPage: async ({ page }, use) => {
        await use(new LandingPage(page))
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    signUpPage: async ({ page }, use) => {
        await use(new SignUpPage(page))
    },
    navigationPage: async ({ page }, use) => {
        await use(new NavigationPage(page))
    },
    myTasksPage: async ({ page }, use) => {
        await use(new MyTasksPage(page))
    },
    passwordPage: async ({ page }, use) => {
        await use(new PasswordPage(page))
    }
})

export const test = testPages;
export const expect = testPages.expect;
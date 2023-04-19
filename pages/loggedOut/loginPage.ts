import { Locator, Page } from "@playwright/test";
import LandingPage from "./landingPage";

export  default class LoginPage extends LandingPage{

    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly rememberMe: Locator;
    readonly signIn: Locator;

    constructor(public page: Page) {
        super(page);
        this.emailInput = page.locator('#login');
        this.passwordInput = page.locator('#password');
        this.rememberMe = page.locator('.checkbox label');
        this.signIn = page.locator('#submit');
    }

    async signInWithLoginDetails(email: string, password: string, rememberMe: boolean = false) {

        await this.enterEmail(email);
        await this.enterPassword(password);
        if (rememberMe) {
          await this.clickRememberMe();
        }
        await this.clickSignIn();
      }
    
    async enterEmail(email: string){
        await this.emailInput.fill(email);
    }

    async enterPassword(password: string){
        await this.passwordInput.fill(password);
    }

    async clickRememberMe(){
        await this.rememberMe.click();
    }

    async clickSignIn(){
        await this.signIn.click();
    }
}
import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export class SignInPage extends BasePage{
    private readonly emailIdTextBox:Locator;
    private readonly passwordTextBox:Locator;
    private readonly signInButton:Locator;

    constructor(page:Page){
        super(page);
        this.emailIdTextBox = page.locator('input[placeholder="Email"]');
        this.passwordTextBox = page.locator('input[placeholder="Password"]');
        this.signInButton = page.locator('button[type="submit"]');
    }

    async enterEmailId(emailId:string){
        await this.fillFormField(this.emailIdTextBox,emailId);
    }

    async enterPassword(password:string){
        await this.fillFormField(this.passwordTextBox,password);
    }
    
    async clickSignInButton(){
        await this.clickElement(this.signInButton);
    }
}
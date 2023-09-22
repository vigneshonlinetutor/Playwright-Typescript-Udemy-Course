import { Locator, Page } from "@playwright/test";

export class LandingPage{
    readonly page:Page;
    readonly signInButton:Locator;

    constructor(page:Page){
        this.signInButton = page.locator('//a[normalize-space()="Sign in"]');
    }

    async clickSignInButton(){
        await this.signInButton.click();
    }
}
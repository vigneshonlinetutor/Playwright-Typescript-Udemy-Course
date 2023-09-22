import { Page, Locator } from "@playwright/test";
import BasePage from "./basePage";

export class SettingsPage extends BasePage{
    readonly page: Page;
    private readonly logoutButton: Locator;

    constructor(page:Page){
        super(page);
        this.logoutButton = page.locator('//button[normalize-space()="Or click here to logout."]');
    }

    async clickLogoutButton() {
        await this.clickElement(this.logoutButton);
    }
}
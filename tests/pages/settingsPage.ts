import { Page, Locator } from "@playwright/test";

export class SettingsPage{
    readonly page: Page;
    readonly logoutButton: Locator;

    constructor(page:Page){
        this.logoutButton = page.locator('//button[normalize-space()="Or click here to logout."]');
    }

    async clickLogoutButton() {
        await this.logoutButton.click();
    }
}
import { Page, Locator } from "@playwright/test";

export class SettingsPage{
    private readonly page: Page;
    private readonly logoutButton: Locator;

    constructor(page:Page){
        this.logoutButton = page.locator('//button[normalize-space()="Or click here to logout."]');
    }

    async clickLogoutButton() {
        await this.logoutButton.click();
    }
}
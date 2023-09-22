import { Page,Locator } from "@playwright/test";

export class HomePage{
    private readonly page: Page;
    private readonly settingsButton: Locator;

    constructor(page:Page){
        this.settingsButton = page.locator('a[href="#settings"]');
    }

    async clickSettingsButton() {
        await this.settingsButton.click();
    }
}
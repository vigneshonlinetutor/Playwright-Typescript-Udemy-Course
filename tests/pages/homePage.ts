import { Page,Locator } from "@playwright/test";

export class HomePage{
    readonly page: Page;
    readonly settingsButton: Locator;

    constructor(page:Page){
        this.settingsButton = page.locator('a[href="#settings"]');
    }

    async clickSettingsButton() {
        await this.settingsButton.click();
    }
}
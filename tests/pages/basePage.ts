import { Locator, Page } from "@playwright/test";

export default class BasePage{
    readonly page:Page;

    constructor(page:Page){
        this.page = page;
    }

    // Common method to navigate to a URL
    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    // Common method to click an element
    async clickElement(element: Locator) {
        await element.click();
    }

    // Common method to fill out a form field
    async fillFormField(element: Locator, value: string) {
        await element.fill(value);
    }

    // Common method to retrieve text from an element
    async getElementText(element: Locator): Promise<string> {
        return element.innerText();
    }

    // Common method to wait for an element to be visible
    async waitForElementVisible(selector: string) {
        await this.page.waitForSelector(selector, { state: 'visible' });
    }

    // Common method to wait for an element to be hidden
    async waitForElementHidden(selector: string) {
        await this.page.waitForSelector(selector, { state: 'hidden' });
    }

    // Common method to take a screenshot
    async takeScreenshot(fileName: string) {
        await this.page.screenshot({ path: fileName });
    }
}
import { test, expect } from '@playwright/test'

test('Radio button Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    const maleRadioButton = page.locator('input[value="Male"]');
    const femaleRadioButton = page.locator('input[value="FeMale"]');

    // Way 1 Assertion
    expect(maleRadioButton).not.toBeChecked();
    expect(femaleRadioButton).not.toBeChecked();

    // Way 2 Assertion
    expect(await maleRadioButton.isChecked()).toBeFalsy();
    expect(await femaleRadioButton.isChecked()).toBeFalsy();

    await maleRadioButton.check();
    expect(maleRadioButton).toBeChecked();

    await femaleRadioButton.check();
    expect(await femaleRadioButton.isChecked()).toBeTruthy();
    
    await page.close();
});
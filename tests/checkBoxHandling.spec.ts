import { test, expect } from '@playwright/test'

test('Checkbox button Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    const cricketCheckbox = page.locator('#checkbox1');
    const moviesCheckbox = page.locator('#checkbox2');
    const hockeyCheckbox = page.locator('#checkbox3');

    // Way 1 Assert
    expect(cricketCheckbox).not.toBeChecked();
    expect(moviesCheckbox).not.toBeChecked();
    expect(hockeyCheckbox).not.toBeChecked();

    // Way 2 Assert
    expect(await cricketCheckbox.isChecked()).toBeFalsy();
    expect(await moviesCheckbox.isChecked()).toBeFalsy();
    expect(await hockeyCheckbox.isChecked()).toBeFalsy();

    await cricketCheckbox.check();
    await moviesCheckbox.check();
    await hockeyCheckbox.check();

    expect(cricketCheckbox).toBeChecked();
    expect(moviesCheckbox).toBeChecked();
    expect(await hockeyCheckbox.isChecked()).toBeTruthy();

    await page.close();
});
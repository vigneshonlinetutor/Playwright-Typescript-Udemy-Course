import { test, expect } from '@playwright/test'

test('Single Static DropDown Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.selectOption('#Skills', {
        value: "Android"
    })

    await page.selectOption('#Skills', {
        label: "Art Design"
    })

    await page.selectOption('#Skills', {
        index: 3
    })

    await page.close();
});

test('Multi Static DropDown Handling', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption('#multi-select', [
        { value: "Ohio" },
        { label: "Texas" },
        { index: 3 }
    ])
    await page.close();
});

test('Searchable Dynamic DropDown', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('span[role="combobox"]').click();
    await page.locator('input[role="textbox"]').fill("India");
    await page.locator('ul#select2-country-results>li').click();
    await page.pause();
    await page.close();
});

test('Non Searchable Dynamic DropDown', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('span[role="combobox"]').click();
    await page.locator('ul#select2-country-results').locator("li", {
        hasText: "India"
    }).click();
    await page.pause();
    await page.close();
});

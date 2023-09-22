import { test, expect } from '@playwright/test';

test('Single Tab Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');

  const [newTab] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('button:has-text("click")')
  ])

  await newTab.waitForLoadState();
  newTab.locator('.DocSearch-Button-Placeholder').click();
  newTab.locator('#docsearch-input').fill("Locator Strategies");
  await newTab.waitForTimeout(5000);
  await newTab.close();
})

test('Single Window Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.locator('.analystic[href="#Seperate"]').click();

  const [newWindow] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('button[onclick="newwindow()"]')
  ])

  await newWindow.waitForLoadState();
  newWindow.locator('.DocSearch-Button-Placeholder').click();
  newWindow.locator('#docsearch-input').fill("Locator Strategies");
  await newWindow.waitForTimeout(5000);
  await newWindow.close();
})

test('Multiple Tab Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.locator('.analystic[href="#Multiple"]').click();

  const [multipleTab] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('button[onclick="multiwindow()"]')
  ])

  await multipleTab.waitForLoadState();
  const pages = multipleTab.context().pages();
  console.log("Total Pages opened "+pages.length);

  await pages[1].locator('#email').fill('playwright@gmail.com');
  await multipleTab.waitForTimeout(5000);
  
  await pages[2].locator('.DocSearch-Button-Placeholder').click();
  await pages[2].locator('#docsearch-input').fill("Locator Strategies");
  await multipleTab.waitForTimeout(5000);

  await pages[1].close();
  await pages[2].close();
})

/*
test('Multiple Window Handling', async ({ page }) => {
  Handling of Multiple window is exactly same as handling multiple tab
  For practice go to this website -> https://www.hyrtutorials.com/p/window-handles-practice.html
})
*/
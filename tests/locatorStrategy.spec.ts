import { test, expect } from '@playwright/test';

test('Different Locator Strategy', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Directly by using object property
  await page.click('id=user-name');
  await page.locator('id=user-name').fill('standard_user');
  await page.locator('[placeholder="Username"]').fill('standard_user');
  await page.locator('data-test=username').fill('standard_user');

  // Using CSS Selector
  await page.locator('#user-name').fill('standard_user');

  // Using Xpath Selector
  await page.locator('//input[@data-test="password"]').fill('secret_sauce');

  // Using Text
  //Way - 1
  // await page.locator('text=Login').click()

  //Way - 2
  await page.locator('input:has-text("Login")').click();
});
import { test, expect } from '@playwright/test';
import * as orangeHrmData from './testData/orangeHRMCredentials.json'

test('Login test with valid Credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.locator('[placeholder="Username"]').fill(orangeHrmData.validUsername);
  await page.locator('[placeholder="Password"]').fill(orangeHrmData.validPassword);
  await page.locator('[type="submit"]').click();
  await page.locator('.oxd-userdropdown').click();
  await page.locator('text=Logout').click();
});

test('Login test with invalid Credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.locator('[placeholder="Username"]').fill(orangeHrmData.invalidUsername);
  await page.locator('[placeholder="Password"]').fill(orangeHrmData.invalidPassword);
  await page.locator('[type="submit"]').click();
  await expect(page.locator('.orangehrm-login-error>.oxd-alert--error')).toBeVisible();
});
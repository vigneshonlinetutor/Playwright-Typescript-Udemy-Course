import { test, expect } from '../fixtures/pomFixtures';

test('Login Conduit test using POM', async ({ page, landingPage, homePage, signinPage, settingsPage }) => {
  await page.goto('https://react-redux.realworld.io/');
  await landingPage.clickSignInButton();
  await signinPage.enterEmailId("playwrightdemo@gmail.com");
  await signinPage.enterPassword("playwrightdemo");
  await signinPage.clickSignInButton();
  await homePage.clickSettingsButton();
  await settingsPage.clickLogoutButton();
  await page.close();
});
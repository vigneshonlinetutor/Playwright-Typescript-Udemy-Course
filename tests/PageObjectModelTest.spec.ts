import { test, expect } from '@playwright/test';
import {LandingPage} from '../tests/pages/landingPage';
import {HomePage} from '../tests/pages/homePage';
import {SignInPage} from '../tests/pages/signinPage';
import {SettingsPage} from '../tests/pages/settingsPage';

test('Login Conduit test using POM', async ({ page }) => {
  const landingPage = new LandingPage(page);
  const signInPage = new SignInPage(page);
  const homePage = new HomePage(page);
  const settingsPage = new SettingsPage(page);

  await landingPage.navigateTo('https://react-redux.realworld.io/')
  await landingPage.clickSignInButton();
  await signInPage.enterEmailId("playwrightdemo@gmail.com");
  await signInPage.enterPassword("playwrightdemo");
  await signInPage.clickSignInButton();
  await homePage.clickSettingsButton();
  await settingsPage.clickLogoutButton();
  await page.close();
});
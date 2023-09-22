import {test as baseTest} from '@playwright/test';
import {LandingPage} from '../tests/pages/landingPage';
import {HomePage} from '../tests/pages/homePage';
import {SignInPage} from '../tests/pages/signinPage';
import {SettingsPage} from '../tests/pages/settingsPage';

type pages = {
    landingPage: LandingPage,
    homePage: HomePage,
    signinPage: SignInPage,
    settingsPage: SettingsPage
}

const testPages = baseTest.extend<pages>({
    landingPage: async({page}, use)=>{
        await use(new LandingPage(page));
    },
    homePage: async({page}, use)=>{
        await use(new HomePage(page));
    },
    signinPage: async({page}, use)=>{
        await use(new SignInPage(page));
    },
    settingsPage: async({page}, use)=>{
        await use(new SettingsPage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;
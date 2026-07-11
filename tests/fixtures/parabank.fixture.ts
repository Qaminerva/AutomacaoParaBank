import { test as base } from '@playwright/test';
import { AccountPage } from '../../src/pages/AccountPage';
import { HomePage } from '../../src/pages/HomePage';
import { LoginPage } from '../../src/pages/LoginPage';
import { RegisterPage } from '../../src/pages/RegisterPage';
import { VALID_CREDENTIALS } from '../support/parabank-data';

type ParaBankFixtures = {
  homePage: HomePage;
  registerPage: RegisterPage;
  loginPage: LoginPage;
  accountPage: AccountPage;
};

export const test = base.extend<ParaBankFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  accountPage: async ({ page }, use) => {
    await use(new AccountPage(page));
  },
});

export async function openRegisterForm(homePage: HomePage, registerPage: RegisterPage) {
  await homePage.goto();
  await homePage.clickRegisterLink();
  await registerPage.page.waitForLoadState('networkidle');
}

export async function loginAsDefaultUser(loginPage: LoginPage) {
  await loginPage.goto();
  await loginPage.login(VALID_CREDENTIALS.username, VALID_CREDENTIALS.password);
}

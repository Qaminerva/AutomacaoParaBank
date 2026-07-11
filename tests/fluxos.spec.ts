import { expect } from '@playwright/test';
import { test, loginAsDefaultUser, openRegisterForm } from './fixtures/parabank.fixture';
import { buildUserData } from './support/parabank-data';

test.describe('ParaBank - Fluxos Completos', () => {
  test('CT27 - Fluxo completo: Registrar -> Login -> Visualizar Conta', async ({ homePage, registerPage, loginPage, accountPage }) => {
    const userData = buildUserData({ ssn: '99999999999' });

    await openRegisterForm(homePage, registerPage);
    await registerPage.fillRegistrationForm(userData);
    await registerPage.register();

    await loginPage.goto();
    await loginPage.login(userData.username, userData.password);
    await expect(await accountPage.isLoggedIn()).toBe(true);
  });

  test('CT28 - Fluxo: Login -> Transferencia -> Logout', async ({ loginPage, accountPage }) => {
    await loginAsDefaultUser(loginPage);
    await accountPage.transferFunds();
    await accountPage.logout();

    await expect(await loginPage.isLoginSuccessful()).toBe(false);
  });

  test('CT29 - Multiplos acessos consecutivos', async ({ homePage }) => {
    for (let i = 0; i < 3; i++) {
      await homePage.goto();
      await expect(homePage.page).toHaveURL(/parabank/i);
    }
  });

  test('CT30 - Navegacao entre paginas de registro e login', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);
    await homePage.goto();

    await expect(homePage.page).toHaveURL(/parabank/i);
  });
});

import { expect } from '@playwright/test';
import { test, loginAsDefaultUser } from './fixtures/parabank.fixture';
import { VALID_CREDENTIALS } from './support/parabank-data';

test.describe('ParaBank - Login', () => {
  test('CT04 - Login com credenciais invalidas (senha errada)', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(VALID_CREDENTIALS.username, 'SenhaErrada');

    await expect(await loginPage.isLoginSuccessful()).toBe(false);
  });

  test('CT05 - Login com usuario que nao existe', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('usuario.inexistente.12345', VALID_CREDENTIALS.password);

    await expect(await loginPage.isLoginSuccessful()).toBe(false);
  });

  test('CT06 - Login com campos vazios', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.loginWithoutCredentials();

    await expect(await loginPage.isLoginSuccessful()).toBe(false);
  });

  test('CT07 - Logout e validar retorno a pagina inicial', async ({ loginPage, accountPage, homePage }) => {
    await loginAsDefaultUser(loginPage);
    await expect(await accountPage.isLoggedIn()).toBe(true);

    await accountPage.logout();
    await expect(homePage.page).toHaveURL(/parabank/i);
  });
});

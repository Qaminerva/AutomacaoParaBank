import { expect } from '@playwright/test';
import { test, loginAsDefaultUser } from './fixtures/parabank.fixture';

test.describe('ParaBank - Perfil do Usuario', () => {
  test('CT16 - Acessar pagina de atualizacao de perfil', async ({ loginPage, accountPage }) => {
    await loginAsDefaultUser(loginPage);
    await accountPage.updateProfile();

    await expect(accountPage.page).toHaveURL(/profile|update|parabank/i);
  });

  test('CT17 - Acessar pagina de mudanca de senha', async ({ loginPage, accountPage }) => {
    await loginAsDefaultUser(loginPage);
    await accountPage.changePassword();

    await expect(accountPage.page).toHaveURL(/password|parabank/i);
  });

  test('CT18 - Link de recuperacao de senha visivel', async ({ loginPage }) => {
    await loginPage.goto();

    const forgotLink = loginPage.page.locator('a:has-text("Forgot login info?")');
    await expect(forgotLink).toBeVisible();
  });
});

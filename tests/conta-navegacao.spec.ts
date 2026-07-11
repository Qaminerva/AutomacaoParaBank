import { expect } from '@playwright/test';
import { test, loginAsDefaultUser } from './fixtures/parabank.fixture';

test.describe('ParaBank - Conta e Navegacao Interna', () => {
  test('CT12 - Verificar dados da conta apos login', async ({ loginPage, accountPage }) => {
    await loginAsDefaultUser(loginPage);

    await expect(await accountPage.isLoggedIn()).toBe(true);
    await expect(await accountPage.getPageTitle()).toContain('ParaBank');
  });

  test('CT13 - Visualizar saldo/extrato', async ({ loginPage, accountPage }) => {
    await loginAsDefaultUser(loginPage);
    await accountPage.viewAccounts();

    await expect(await accountPage.hasTransactionHistory()).toBe(true);
  });

  test('CT14 - Acesso a pagina de transferencias', async ({ loginPage, accountPage }) => {
    await loginAsDefaultUser(loginPage);
    await accountPage.transferFunds();

    await expect(accountPage.page).toHaveURL(/parabank/i);
  });

  test('CT15 - Historico de transacoes visivel', async ({ loginPage, accountPage }) => {
    await loginAsDefaultUser(loginPage);
    await accountPage.viewAccounts();

    await expect(await accountPage.hasTransactionHistory()).toBe(true);
  });
});

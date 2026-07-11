import { expect } from '@playwright/test';
import { test, openRegisterForm } from './fixtures/parabank.fixture';
import { buildUserData } from './support/parabank-data';

test.describe('ParaBank - Acesso e Registro Inicial', () => {
  test('CT01 - Acessar a URL do ParaBank', async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.page).toHaveURL(/parabank/i);
  });

  test('CT02 - Criar um novo usuario preenchendo todos os campos', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);

    const userData = buildUserData();
    await registerPage.fillRegistrationForm(userData);
    await registerPage.register();

    await expect(registerPage.page).toHaveURL(/parabank/i);
  });
});

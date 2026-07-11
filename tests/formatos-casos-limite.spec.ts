import { expect } from '@playwright/test';
import { test, openRegisterForm } from './fixtures/parabank.fixture';
import { buildUserData } from './support/parabank-data';

test.describe('ParaBank - Validacao de Formatos e Casos Limite', () => {
  test('CT21 - Validar nome com numeros', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);

    const userData = buildUserData({
      firstName: 'Usuario123',
      lastName: 'Teste456',
      address: 'Rua Teste 789',
    });
    await registerPage.fillRegistrationForm(userData);

    await expect(registerPage.firstNameInput).toHaveValue('Usuario123');
  });

  test('CT22 - Validar campo SSN com formato invalido', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);

    const userData = buildUserData({ ssn: 'ABC12345' });
    await registerPage.fillRegistrationForm(userData);

    await expect(registerPage.ssnInput).toHaveValue('ABC12345');
  });

  test('CT23 - Validar CEP com caracteres especiais', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);

    const userData = buildUserData({ zipCode: '01310-100' });
    await registerPage.fillRegistrationForm(userData);

    await expect(registerPage.zipCodeInput).toHaveValue('01310-100');
  });

  test('CT24 - Validar telefone com diferentes formatos', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);

    const userData = buildUserData({ phone: '(11) 3333-4444' });
    await registerPage.fillRegistrationForm(userData);

    await expect(registerPage.phoneInput).toHaveValue('(11) 3333-4444');
  });

  test('CT25 - Validar nome muito longo', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);

    const longName = 'A'.repeat(100);
    const userData = buildUserData({ firstName: longName });
    await registerPage.fillRegistrationForm(userData);

    await expect(registerPage.firstNameInput).toHaveValue(longName);
  });

  test('CT26 - Validar username com caracteres especiais', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);

    const userData = buildUserData({ username: `user.special.${Date.now()}` });
    await registerPage.fillRegistrationForm(userData);

    await expect(registerPage.usernameInput).toHaveValue(userData.username);
  });

  test('CT31 - Email com dominio incomum', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);

    const userData = buildUserData({ username: `user${Date.now()}@test.co.uk` });
    await registerPage.fillRegistrationForm(userData);

    await expect(registerPage.usernameInput).toHaveValue(userData.username);
  });

  test('CT32 - SSN com valor minimo', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);

    const userData = buildUserData({ ssn: '00000000000' });
    await registerPage.fillRegistrationForm(userData);

    await expect(registerPage.ssnInput).toHaveValue('00000000000');
  });

  test('CT33 - SSN com valor maximo', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);

    const userData = buildUserData({ ssn: '99999999999' });
    await registerPage.fillRegistrationForm(userData);

    await expect(registerPage.ssnInput).toHaveValue('99999999999');
  });

  test('CT34 - Espacos em branco no inicio/fim do username', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);

    const usernameWithSpaces = `  user${Date.now()}  `;
    const userData = buildUserData({ username: usernameWithSpaces });
    await registerPage.fillRegistrationForm(userData);

    await expect(registerPage.usernameInput).toHaveValue(usernameWithSpaces);
  });

  test('CT35 - Senha muito longa', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);

    const longPassword = `A@1${'b'.repeat(100)}`;
    const userData = buildUserData({ password: longPassword });
    await registerPage.fillRegistrationForm(userData);

    await expect(registerPage.passwordInput).toHaveValue(longPassword);
  });
});

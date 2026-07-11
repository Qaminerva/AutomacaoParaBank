import { expect } from '@playwright/test';
import { test, openRegisterForm } from './fixtures/parabank.fixture';
import { buildUserData, uniqueId, VALID_CREDENTIALS } from './support/parabank-data';

test.describe('ParaBank - Registro e Validacoes', () => {
  test('CT08 - Registrar com usuario duplicado (erro)', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);

    const userData = buildUserData({ username: VALID_CREDENTIALS.username, ssn: '12345678901' });
    await registerPage.fillRegistrationForm(userData);
    await registerPage.register();

    await expect(await registerPage.hasErrorMessage()).toBe(true);
  });

  test('CT09 - Registrar deixando campos obrigatorios vazios', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);

    await registerPage.fillRegistrationFormPartial({
      firstName: 'Teste',
      username: uniqueId('novo.usuario').slice(0, 20),
      password: VALID_CREDENTIALS.password,
    });
    await registerPage.register();

    await expect(await registerPage.isSuccessMessageVisible()).toBe(false);
  });

  test('CT10 - Registrar com senhas nao coincidentes', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);

    const userData = buildUserData();
    await registerPage.fillRegistrationForm(userData);
    await registerPage.confirmPasswordInput.fill('OutraSenha@123');
    await registerPage.register();

    await expect(await registerPage.isSuccessMessageVisible()).toBe(false);
  });

  test('CT11 - Validacao de formato de campos', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);

    const userData = buildUserData({ username: uniqueId('teste.formato').slice(0, 24) });
    await registerPage.fillRegistrationForm(userData);

    await expect(registerPage.firstNameInput).toHaveValue(userData.firstName);
    await expect(registerPage.usernameInput).toHaveValue(userData.username);
  });
});

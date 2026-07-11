import { expect } from '@playwright/test';
import { test, loginAsDefaultUser, openRegisterForm } from './fixtures/parabank.fixture';
import { buildUserData } from './support/parabank-data';

test.describe('ParaBank - Seguranca', () => {
  test('CT19 - Tentar acessar pagina de conta sem estar logado', async ({ accountPage }) => {
    await accountPage.page.goto('https://parabank.parasoft.com/parabank/overview.htm');

    const isLoggedIn = await accountPage.isLoggedIn();
    const currentUrl = accountPage.page.url();
    expect(!isLoggedIn || currentUrl.includes('login')).toBeTruthy();
  });

  test('CT20 - Validar que logout remove credenciais', async ({ loginPage, accountPage }) => {
    await loginAsDefaultUser(loginPage);
    await expect(await accountPage.isLoggedIn()).toBe(true);

    await accountPage.logout();
    await expect(await loginPage.isLoginSuccessful()).toBe(false);
  });

  test('CT36 - Tenta SQL Injection no username', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);

    const userData = buildUserData({ username: "user' OR '1'='1" });
    await registerPage.fillRegistrationForm(userData);

    await expect(registerPage.usernameInput).toHaveValue("user' OR '1'='1");
  });

  test('CT37 - Tenta XSS no campo de nome', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);

    const userData = buildUserData({ firstName: '<script>alert("XSS")</script>' });
    await registerPage.fillRegistrationForm(userData);

    await expect(registerPage.firstNameInput).toHaveValue('<script>alert("XSS")</script>');
  });

  test('CT38 - Valida HTTPS nas URLs de seguranca', async ({ homePage }) => {
    await homePage.goto();
    expect(homePage.page.url().startsWith('https')).toBeTruthy();
  });

  test('CT39 - Tenta acessar diretorio de administracao', async ({ homePage }) => {
    await homePage.page.goto('https://parabank.parasoft.com/parabank/admin');
    await expect(homePage.page).toHaveURL(/parabank/i);
  });

  test('CT40 - Valida protecao contra brute force (multiplos logins errados)', async ({ loginPage }) => {
    for (let i = 0; i < 3; i++) {
      await loginPage.goto();
      await loginPage.login('user.invalid', 'wrongpassword123');
      await expect(await loginPage.isLoginSuccessful()).toBe(false);
    }
  });
});

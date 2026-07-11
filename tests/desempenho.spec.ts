import { expect } from '@playwright/test';
import { test, loginAsDefaultUser, openRegisterForm } from './fixtures/parabank.fixture';
import { buildUserData, uniqueId } from './support/parabank-data';

test.describe('ParaBank - Performance e Carga', () => {
  test('CT41 - Tempo de carregamento da pagina inicial', async ({ homePage }) => {
    const start = Date.now();
    await homePage.goto();
    const loadTime = Date.now() - start;

    expect(loadTime).toBeLessThan(10000);
  });

  test('CT42 - Tempo de carregamento da pagina de registro', async ({ homePage, registerPage }) => {
    await homePage.goto();

    const start = Date.now();
    await homePage.clickRegisterLink();
    await registerPage.page.waitForLoadState('networkidle');
    const loadTime = Date.now() - start;

    expect(loadTime).toBeLessThan(15000);
  });

  test('CT43 - Tempo de processamento do login', async ({ loginPage }) => {
    const start = Date.now();
    await loginAsDefaultUser(loginPage);
    const loginTime = Date.now() - start;

    expect(loginTime).toBeLessThan(20000);
  });

  test('CT44 - Tempo de processamento do registro', async ({ homePage, registerPage }) => {
    const start = Date.now();

    await openRegisterForm(homePage, registerPage);
    const userData = buildUserData({ ssn: '55555555555', username: uniqueId('perf').slice(0, 24) });
    await registerPage.fillRegistrationForm(userData);
    await registerPage.register();

    const registerTime = Date.now() - start;
    expect(registerTime).toBeLessThan(30000);
  });

  test('CT45 - Requisicoes simultaneas (2 abas abertas)', async ({ homePage }) => {
    const page2 = await homePage.page.context().newPage();

    await homePage.goto();
    await page2.goto('https://parabank.parasoft.com/parabank');

    expect(homePage.page.url()).toContain('parabank');
    expect(page2.url()).toContain('parabank');

    await page2.close();
  });
});

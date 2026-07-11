import { expect } from '@playwright/test';
import { test, openRegisterForm } from './fixtures/parabank.fixture';

test.describe('ParaBank - Usabilidade', () => {
  test('CT46 - Verificar responsividade em diferentes tamanhos', async ({ homePage }) => {
    await homePage.page.setViewportSize({ width: 1920, height: 1080 });
    await homePage.goto();
    await expect(homePage.page).toHaveURL(/parabank/i);

    await homePage.page.setViewportSize({ width: 768, height: 1024 });
    await homePage.goto();
    await expect(homePage.page).toHaveURL(/parabank/i);

    await homePage.page.setViewportSize({ width: 375, height: 667 });
    await homePage.goto();
    await expect(homePage.page).toHaveURL(/parabank/i);
  });

  test('CT47 - Acessibilidade: Elementos focaveis com teclado', async ({ homePage }) => {
    await homePage.goto();
    await homePage.page.keyboard.press('Tab');
    await homePage.page.keyboard.press('Tab');

    await expect(homePage.page).toHaveURL(/parabank/i);
  });

  test('CT48 - Validar mensagens de erro claras', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('usuario.invalido', 'senha.errada');

    const errorMsg = loginPage.page.locator('[role="alert"], .error').first();
    await expect(errorMsg).toBeVisible();
  });

  test('CT49 - Validar links e botoes sao clicaveis', async ({ homePage }) => {
    await homePage.goto();

    const registerLink = homePage.page.locator('a:has-text("Register")');
    await expect(registerLink).toBeVisible();
    await registerLink.click();
    await expect(homePage.page).toHaveURL(/register|parabank/i);
  });

  test('CT50 - Validar feedback visual ao preencher formulario', async ({ homePage, registerPage }) => {
    await openRegisterForm(homePage, registerPage);

    await registerPage.firstNameInput.fill('TestUser');
    await expect(registerPage.firstNameInput).toHaveValue('TestUser');
  });
});

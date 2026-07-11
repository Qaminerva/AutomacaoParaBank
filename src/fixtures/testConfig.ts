/**
 * Test Configuration - Hooks e fixtures globais
 * Padrão: QA Senior
 */

import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { AccountPage } from './pages/AccountPage';

/**
 * Fixture com as páginas principais
 */
export const testWithPages = test.extend({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    await use(registerPage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  accountPage: async ({ page }, use) => {
    const accountPage = new AccountPage(page);
    await use(accountPage);
  }
});

/**
 * Hook: Before Each - Executado antes de cada teste
 */
testWithPages.beforeEach(async ({ page }) => {
  console.log(`\n🧪 Iniciando teste: ${new Date().toLocaleTimeString()}`);
  console.log(`📍 Base URL: ${page.url()}`);

  // Listener para logs do navegador
  page.on('console', msg => {
    if (msg.type() !== 'log') {
      console.log(`  [Browser ${msg.type().toUpperCase()}] ${msg.text()}`);
    }
  });

  // Listener para erros não capturados
  page.on('pageerror', error => {
    console.error(`  [Page Error] ${error.message}`);
  });

  // Listener para requisições que falharam
  page.on('requestfailed', request => {
    console.warn(`  [Request Failed] ${request.method()} ${request.url()}`);
  });
});

/**
 * Hook: After Each - Executado depois de cada teste
 */
testWithPages.afterEach(async ({ page }, info) => {
  console.log(`✅ Teste finalizado: ${info.status}`);
  console.log(`⏱️  Duração: ${info.duration}ms\n`);

  // Se o teste falhou, tira screenshot
  if (info.status === 'failed') {
    const screenshotPath = `test-results/failures/${info.title}-${Date.now()}.png`;
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.error(`  📸 Screenshot: ${screenshotPath}`);
  }
});

/**
 * Configurações globais de timeout
 */
test.setTimeout(120000); // 2 minutos por teste

/**
 * Reutilizar a suíte de testes com as fixtures
 */
export { expect };

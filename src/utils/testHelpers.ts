/**
 * Test Utilities - Funções auxiliares para testes
 * Padrão: QA Senior
 */

import { Page } from '@playwright/test';
import { TIMEOUTS } from './constants';

/**
 * Aguarda e retorna o tempo de execução de uma ação
 */
export async function measureExecutionTime(
  action: () => Promise<void>
): Promise<number> {
  const startTime = Date.now();
  await action();
  return Date.now() - startTime;
}

/**
 * Aguarda um elemento ficar visível com retry
 */
export async function waitForElementVisible(
  page: Page,
  selector: string,
  timeout: number = TIMEOUTS.LONG
): Promise<boolean> {
  try {
    await page.locator(selector).waitFor({ state: 'visible', timeout });
    return true;
  } catch {
    return false;
  }
}

/**
 * Tira screenshot automático com timestamp
 */
export async function takeScreenshot(
  page: Page,
  name: string
): Promise<void> {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  await page.screenshot({
    path: `test-results/screenshots/${name}-${timestamp}.png`,
    fullPage: true
  });
}

/**
 * Valida se um campo contém um valor específico
 */
export async function validateFieldValue(
  page: Page,
  selector: string,
  expectedValue: string
): Promise<boolean> {
  const value = await page.locator(selector).inputValue().catch(() => '');
  return value === expectedValue;
}

/**
 * Limpa e preenche um campo de entrada
 */
export async function clearAndFill(
  page: Page,
  selector: string,
  value: string
): Promise<void> {
  const locator = page.locator(selector);
  await locator.clear();
  await page.waitForTimeout(TIMEOUTS.MINIMAL);
  await locator.fill(value);
}

/**
 * Clica em um elemento e aguarda navegação
 */
export async function clickAndWaitForNavigation(
  page: Page,
  selector: string,
  timeout: number = TIMEOUTS.LONG
): Promise<void> {
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle', timeout }),
    page.locator(selector).click()
  ]);
}

/**
 * Verifica se um elemento é clicável
 */
export async function isElementClickable(
  page: Page,
  selector: string
): Promise<boolean> {
  try {
    const element = page.locator(selector);
    const isVisible = await element.isVisible().catch(() => false);
    const isEnabled = await element.isEnabled().catch(() => false);
    return isVisible && isEnabled;
  } catch {
    return false;
  }
}

/**
 * Obtém todas as mensagens de erro da página
 */
export async function getAllErrorMessages(
  page: Page
): Promise<string[]> {
  const errors = await page
    .locator('[class*="error"], [role="alert"]')
    .allTextContents();
  return errors.filter(text => text.trim().length > 0);
}

/**
 * Valida performance de carregamento
 */
export async function validateLoadingPerformance(
  page: Page,
  maxTime: number
): Promise<boolean> {
  const performanceMetrics = await page.evaluate(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return navigation.loadEventEnd - navigation.fetchStart;
  });
  
  return performanceMetrics <= maxTime;
}

/**
 * Aguarda múltiplos elementos desaparecerem
 */
export async function waitForElementsHidden(
  page: Page,
  selectors: string[],
  timeout: number = TIMEOUTS.LONG
): Promise<void> {
  for (const selector of selectors) {
    try {
      await page.locator(selector).waitFor({ state: 'hidden', timeout });
    } catch {
      // Elemento já estava oculto
    }
  }
}

/**
 * Retorna o texto de um elemento ou string vazia se não encontrar
 */
export async function getElementText(
  page: Page,
  selector: string
): Promise<string> {
  try {
    return await page.locator(selector).textContent() || '';
  } catch {
    return '';
  }
}

/**
 * Aguarda a página estar completamente carregada
 */
export async function waitForFullPageLoad(
  page: Page,
  timeout: number = TIMEOUTS.VERY_LONG
): Promise<void> {
  await page.waitForLoadState('domcontentloaded', { timeout });
  await page.waitForLoadState('networkidle', { timeout });
}

/**
 * Simula delay aleatório (para não parecer automação)
 */
export async function randomDelay(
  minMs: number = 100,
  maxMs: number = 500
): Promise<void> {
  const delay = Math.random() * (maxMs - minMs) + minMs;
  await new Promise(resolve => setTimeout(resolve, delay));
}

/**
 * Retorna informações úteis para debug
 */
export async function getDebugInfo(page: Page): Promise<{
  url: string;
  title: string;
  pageText: string;
  console: string[];
}> {
  const consoleLogs: string[] = [];
  
  page.on('console', msg => {
    consoleLogs.push(`[${msg.type()}] ${msg.text()}`);
  });

  return {
    url: page.url(),
    title: await page.title(),
    pageText: await page.locator('body').textContent() || '',
    console: consoleLogs
  };
}

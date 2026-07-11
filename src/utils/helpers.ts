import { Page } from '@playwright/test';

export async function waitForPageLoad(page: Page) {
  await page.waitForLoadState('networkidle');
}

export async function takeScreenshot(page: Page, name: string) {
  await page.screenshot({ path: `screenshots/${name}.png` });
}

export function generateUniqueUsername(prefix: string = 'user') {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substring(7)}`;
}

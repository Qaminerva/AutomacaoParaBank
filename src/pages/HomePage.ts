import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly registerLink: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.registerLink = page.locator('a:has-text("Register")');
    this.loginButton = page.locator('input[value="Log In"]');
  }

  async goto() {
    await this.navigateToBaseUrl();
  }

  async clickRegisterLink() {
    await this.registerLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  async isHomePageLoaded() {
    return await this.page.title().then(title => title.includes('ParaBank'));
  }
}

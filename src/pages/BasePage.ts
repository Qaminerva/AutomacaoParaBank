import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly baseURL = 'https://parabank.parasoft.com/parabank';

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToBaseUrl() {
    await this.page.goto(this.baseURL);
    await this.page.waitForLoadState('networkidle');
  }

  async getPageTitle() {
    return await this.page.title();
  }

  async waitForElement(selector: string) {
    await this.page.waitForSelector(selector);
  }

  async screenshot(name: string) {
    await this.page.screenshot({ path: `./screenshots/${name}.png` });
  }
}

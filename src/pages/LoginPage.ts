import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    // Seletores corretos do formulário de login
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('input.button[value="Log In"]');
    this.errorMessage = page.locator('.error');
  }

  async goto() {
    await this.navigateToBaseUrl();
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async isLoginSuccessful() {
    const logoutLink = this.page.locator('a:has-text("Log Out")');
    return logoutLink.isVisible();
  }

  async isErrorMessageVisible() {
    return await this.errorMessage.isVisible();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  async isUsernameFieldEmpty() {
    const value = await this.usernameInput.inputValue();
    return value === '';
  }

  async isPasswordFieldEmpty() {
    const value = await this.passwordInput.inputValue();
    return value === '';
  }

  async loginWithoutCredentials() {
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }
}

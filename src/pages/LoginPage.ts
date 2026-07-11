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
    this.usernameInput = page.locator('#loginPanel > form > div:nth-child(2) > input');
    this.passwordInput = page.locator('#loginPanel > form > div:nth-child(4) > input');
    this.loginButton = page.locator('#loginPanel > form > div:nth-child(5) > input');
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
    // Verificar se redirecionou para a página de contas/overview
    const currentUrl = this.page.url();
    return currentUrl.includes('overview') || currentUrl.includes('accounts');
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

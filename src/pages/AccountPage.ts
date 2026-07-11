import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountPage extends BasePage {
  readonly accountsLink: Locator;
  readonly transferLink: Locator;
  readonly bilPayLink: Locator;
  readonly logoutLink: Locator;
  readonly accountBalance: Locator;
  readonly updateProfileLink: Locator;
  readonly changePasswordLink: Locator;
  readonly accountNumber: Locator;
  readonly transactionHistory: Locator;

  constructor(page: Page) {
    super(page);
    this.accountsLink = page.locator('a:has-text("Accounts")');
    this.transferLink = page.locator('a:has-text("Transfer Funds")');
    this.bilPayLink = page.locator('a:has-text("Bill Pay")');
    this.logoutLink = page.locator('a:has-text("Log Out")');
    this.updateProfileLink = page.locator('a:has-text("Update Contact Info")');
    this.changePasswordLink = page.locator('a:has-text("Change Password"), a:has-text("Update Contact Info")');
    this.accountBalance = page.locator('td:has-text("Balance")');
    this.accountNumber = page.locator('td.ng-binding');
    this.transactionHistory = page.locator('table');
  }

  async viewAccounts() {
    await this.accountsLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  async transferFunds() {
    await this.transferLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  async logout() {
    await this.logoutLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  async isLoggedIn() {
    return this.logoutLink.isVisible();
  }

  async getAccountBalance() {
    const balanceText = await this.accountBalance.textContent();
    return balanceText;
  }

  async updateProfile() {
    await this.updateProfileLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  async changePassword() {
    await this.changePasswordLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  async hasTransactionHistory() {
    return await this.transactionHistory.isVisible();
  }
}

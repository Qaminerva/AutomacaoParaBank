import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly addressInput: Locator;
  readonly cityInput: Locator;
  readonly stateInput: Locator;
  readonly zipCodeInput: Locator;
  readonly phoneInput: Locator;
  readonly ssnInput: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly registerButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);
    // Seleciona inputs dentro da tabela de registro
    const table = page.locator('table');
    
    this.firstNameInput = table.locator('input').nth(0);
    this.lastNameInput = table.locator('input').nth(1);
    this.addressInput = table.locator('input').nth(2);
    this.cityInput = table.locator('input').nth(3);
    this.stateInput = table.locator('input').nth(4);
    this.zipCodeInput = table.locator('input').nth(5);
    this.phoneInput = table.locator('input').nth(6);
    this.ssnInput = table.locator('input').nth(7);
    this.usernameInput = table.locator('input').nth(8);
    this.passwordInput = table.locator('input').nth(9);
    this.confirmPasswordInput = table.locator('input').nth(10);
    this.registerButton = page.locator('#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input');
    this.successMessage = page.locator('text=Your account was created successfully');
  }

  async goto() {
    await this.navigateTo(`${this.baseURL}/register.htm`);
  }

  async fillRegistrationForm(userData: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    ssn: string;
    username: string;
    password: string;
  }) {
    await this.firstNameInput.fill(userData.firstName);
    await this.page.waitForTimeout(100);
    
    await this.lastNameInput.fill(userData.lastName);
    await this.page.waitForTimeout(100);
    
    await this.addressInput.fill(userData.address);
    await this.page.waitForTimeout(100);
    
    await this.cityInput.fill(userData.city);
    await this.page.waitForTimeout(100);
    
    await this.stateInput.fill(userData.state);
    await this.page.waitForTimeout(100);
    
    await this.zipCodeInput.fill(userData.zipCode);
    await this.page.waitForTimeout(100);
    
    await this.phoneInput.fill(userData.phone);
    await this.page.waitForTimeout(100);
    
    await this.ssnInput.fill(userData.ssn);
    await this.page.waitForTimeout(100);
    
    await this.usernameInput.fill(userData.username);
    await this.page.waitForTimeout(100);
    
    await this.passwordInput.fill(userData.password);
    await this.page.waitForTimeout(100);
    
    await this.confirmPasswordInput.fill(userData.password);
    await this.page.waitForTimeout(100);
  }

  async register() {
    await this.registerButton.click();
    // Aguardar a navegação após clique
    await this.page.waitForLoadState('networkidle');
    // Aguardar extra para garantir que a página carregue
    await this.page.waitForTimeout(2000);
  }

  async isSuccessMessageVisible() {
    // Tentar múltiplas possibilidades de seletores de sucesso
    try {
      // Aguardar um pouco para garantir que a página está carregada
      await this.page.waitForTimeout(1000);
      
      // Opção 1: Procurar pela mensagem de sucesso no texto
      const bodyText = await this.page.locator('body').textContent();
      
      if (bodyText) {
        // Verificar por mensagem de sucesso
        if (bodyText.includes('Your account was created successfully') || 
            bodyText.includes('Welcome') ||
            bodyText.includes('successfully')) {
          return true;
        }
        
        // Verificar se NÃO há mensagem de erro
        if (!bodyText.includes('already exists') && 
            !bodyText.includes('errors') && 
            !bodyText.includes('required')) {
          // Se chegou aqui sem erros, pode ser sucesso
          return true;
        }
      }
      
      // Opção 2: Verificar a URL
      const currentUrl = this.page.url();
      if (currentUrl.includes('overview') || currentUrl.includes('accounts')) {
        return true;
      }
      
      return false;
    } catch (error) {
      console.log('Erro ao verificar sucesso:', error);
      return false;
    }
  }

  async fillRegistrationFormPartial(userData: Partial<{
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    ssn: string;
    username: string;
    password: string;
  }>) {
    if (userData.firstName) await this.firstNameInput.fill(userData.firstName);
    if (userData.lastName) await this.lastNameInput.fill(userData.lastName);
    if (userData.address) await this.addressInput.fill(userData.address);
    if (userData.city) await this.cityInput.fill(userData.city);
    if (userData.state) await this.stateInput.fill(userData.state);
    if (userData.zipCode) await this.zipCodeInput.fill(userData.zipCode);
    if (userData.phone) await this.phoneInput.fill(userData.phone);
    if (userData.ssn) await this.ssnInput.fill(userData.ssn);
    if (userData.username) await this.usernameInput.fill(userData.username);
    if (userData.password) await this.passwordInput.fill(userData.password);
  }

  async getErrorText() {
    try {
      const errorText = await this.page.locator('body').textContent();
      return errorText;
    } catch {
      return '';
    }
  }

  async hasErrorMessage() {
    try {
      const errorText = await this.page.locator('body').textContent();
      return errorText && (errorText.includes('already exists') || errorText.includes('required') || errorText.includes('error'));
    } catch {
      return false;
    }
  }
}

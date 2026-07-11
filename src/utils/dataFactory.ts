/**
 * Data Factory - Geração de dados de teste
 * Padrão: QA Senior
 */

import { TEST_DATA } from './constants';

export interface UserData {
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
}

/**
 * Factory para gerar usuários únicos
 */
export class UserDataFactory {
  /**
   * Gera um ID único praticamente impossível de repetir
   */
  static generateUniqueId(): string {
    return [
      Math.random().toString(36).substring(2, 20),
      Math.random().toString(36).substring(2, 20),
      Date.now().toString(36),
      Math.floor(Math.random() * 999999999).toString(36),
      Math.floor(Date.now() / 1000).toString(36)
    ].join('');
  }

  /**
   * Gera um SSN aleatório
   */
  static generateSSN(min: number = 0, max: number = 99999999999): string {
    const ssn = Math.floor(Math.random() * (max - min + 1)) + min;
    return ssn.toString().padStart(11, '0');
  }

  /**
   * Gera um telefone aleatório
   */
  static generatePhone(): string {
    const area = String(Math.floor(Math.random() * 999)).padStart(3, '0');
    const number = String(Math.floor(Math.random() * 9999999)).padStart(7, '0');
    return `${area}${number}`;
  }

  /**
   * Cria um usuário válido e único
   */
  static createValidUser(overrides?: Partial<UserData>): UserData {
    const uniqueId = this.generateUniqueId();
    const timestamp = Date.now();

    return {
      firstName: `User${uniqueId.substring(0, 6)}`,
      lastName: `Test${timestamp}`,
      address: `Rua${uniqueId.substring(6, 14)}`,
      city: TEST_DATA.CITIES[Math.floor(Math.random() * TEST_DATA.CITIES.length)],
      state: TEST_DATA.STATES[Math.floor(Math.random() * TEST_DATA.STATES.length)],
      zipCode: TEST_DATA.VALID_ZIP,
      phone: this.generatePhone(),
      ssn: this.generateSSN(),
      username: uniqueId.substring(0, 25),
      password: TEST_DATA.VALID_PASSWORD,
      ...overrides
    };
  }

  /**
   * Cria um usuário com nome contendo números
   */
  static createUserWithNumbersInName(): UserData {
    return this.createValidUser({
      firstName: 'Usuario123',
      lastName: 'Teste456'
    });
  }

  /**
   * Cria um usuário com SSN inválido
   */
  static createUserWithInvalidSSN(): UserData {
    return this.createValidUser({
      ssn: TEST_DATA.INVALID_SSN
    });
  }

  /**
   * Cria um usuário com nome muito longo
   */
  static createUserWithLongName(): UserData {
    return this.createValidUser({
      firstName: 'A'.repeat(100),
      lastName: 'Sobrenome'
    });
  }

  /**
   * Cria um usuário com caracteres especiais no username
   */
  static createUserWithSpecialCharsUsername(): UserData {
    return this.createValidUser({
      username: `user@special#${Date.now()}`
    });
  }

  /**
   * Cria um usuário com dados extremos
   */
  static createEdgeCaseUser(): UserData {
    return this.createValidUser({
      firstName: '<script>alert("XSS")</script>',
      lastName: "O'Reilly",
      username: `user' OR '1'='1`
    });
  }

  /**
   * Cria um usuário com duplicação intencional
   */
  static createDuplicateUser(): UserData {
    return {
      firstName: 'Duplicado',
      lastName: 'User',
      address: 'Rua Teste',
      city: 'São Paulo',
      state: 'SP',
      zipCode: TEST_DATA.VALID_ZIP,
      phone: TEST_DATA.VALID_PHONE,
      ssn: TEST_DATA.VALID_SSN,
      username: 'cesar.minerva', // Usuário que já existe
      password: TEST_DATA.VALID_PASSWORD
    };
  }

  /**
   * Cria um usuário com campos vazios
   */
  static createPartialUser(): Partial<UserData> {
    return {
      firstName: 'Teste',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phone: '',
      ssn: '',
      username: `novo.usuario.${Date.now()}`,
      password: TEST_DATA.VALID_PASSWORD
    };
  }

  /**
   * Cria múltiplos usuários únicos
   */
  static createMultipleUsers(count: number): UserData[] {
    return Array.from({ length: count }, () => this.createValidUser());
  }
}

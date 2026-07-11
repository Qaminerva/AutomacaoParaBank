/**
 * Constants - Valores fixos e configurações globais
 * Padrão: QA Senior
 */

// ============ URLs ============
export const BASE_URL = 'https://parabank.parasoft.com/parabank';
export const URLS = {
  HOME: `${BASE_URL}/index.htm`,
  REGISTER: `${BASE_URL}/register.htm`,
  LOGIN: `${BASE_URL}/index.htm`,
  ACCOUNTS: `${BASE_URL}/overview.htm`,
  TRANSFER: `${BASE_URL}/transfer.htm`,
  BILL_PAY: `${BASE_URL}/billpay.htm`,
  SETTINGS: `${BASE_URL}/admin.htm`
};

// ============ CREDENCIAIS DE TESTE ============
export const TEST_CREDENTIALS = {
  VALID_USER: {
    username: 'cesar.minerva',
    password: 'Senha@123'
  },
  INVALID_USER: {
    username: 'usuario.inexistente',
    password: 'senha.errada'
  }
};

// ============ DADOS DE TESTE ============
export const TEST_DATA = {
  VALID_SSN: '12345678901',
  MIN_SSN: '00000000000',
  MAX_SSN: '99999999999',
  INVALID_SSN: 'ABC12345',
  
  VALID_ZIP: '01310100',
  INVALID_ZIP: '00000',
  
  VALID_PHONE: '1133334444',
  PHONE_WITH_FORMAT: '(11) 3333-4444',
  
  VALID_ADDRESS: 'Rua Teste 123',
  LONG_ADDRESS: 'A'.repeat(100),
  
  VALID_PASSWORD: 'Senha@123',
  LONG_PASSWORD: 'A@1' + 'b'.repeat(100),
  SHORT_PASSWORD: 'Pass1',
  
  CITIES: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza'],
  STATES: ['SP', 'RJ', 'DF', 'BA', 'CE']
};

// ============ TIMEOUTS ============
export const TIMEOUTS = {
  MINIMAL: 500,
  SHORT: 1000,
  MEDIUM: 3000,
  LONG: 5000,
  VERY_LONG: 10000
};

// ============ SELECTORS COMUNS ============
export const SELECTORS = {
  REGISTER_LINK: 'a:has-text("Register")',
  LOGIN_BUTTON: 'input[value="Log In"]',
  LOGOUT_BUTTON: 'a:has-text("Logout")',
  ERROR_MESSAGE: '[class*="error"]',
  SUCCESS_MESSAGE: 'text=Your account was created successfully',
  ALERT: '[role="alert"]'
};

// ============ TESTE TAGS ============
export const TEST_TAGS = {
  SMOKE: '@smoke',
  REGRESSION: '@regression',
  E2E: '@e2e',
  SECURITY: '@security',
  PERFORMANCE: '@performance',
  USABILITY: '@usability'
};

// ============ VALIDAÇÕES ============
export const VALIDATIONS = {
  MIN_USERNAME_LENGTH: 5,
  MAX_USERNAME_LENGTH: 32,
  MIN_PASSWORD_LENGTH: 8,
  MAX_PASSWORD_LENGTH: 128,
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 50
};

// ============ PERFORMANCE ============
export const PERFORMANCE_THRESHOLDS = {
  PAGE_LOAD: 10000,      // 10 segundos
  LOGIN_TIME: 20000,     // 20 segundos
  REGISTER_TIME: 30000,  // 30 segundos
  API_RESPONSE: 5000     // 5 segundos
};

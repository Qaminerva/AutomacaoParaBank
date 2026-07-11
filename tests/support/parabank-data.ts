import { RegisterPage } from '../../src/pages/RegisterPage';

type RegistrationData = Parameters<RegisterPage['fillRegistrationForm']>[0];

export const VALID_CREDENTIALS = {
  username: 'cesar.minerva',
  password: 'Senha@123',
};

const DEFAULT_ADDRESS = {
  city: 'Sao Paulo',
  state: 'SP',
  zipCode: '01310100',
  phone: '1133334444',
};

export function uniqueId(prefix: string) {
  return `${prefix}.${Date.now()}.${Math.floor(Math.random() * 100000)}`;
}

export function buildUserData(overrides: Partial<RegistrationData> = {}): RegistrationData {
  const id = uniqueId('user');

  return {
    firstName: `Teste${id.slice(-4)}`,
    lastName: 'Automacao',
    address: `Rua ${id}`,
    city: DEFAULT_ADDRESS.city,
    state: DEFAULT_ADDRESS.state,
    zipCode: DEFAULT_ADDRESS.zipCode,
    phone: DEFAULT_ADDRESS.phone,
    ssn: `${Math.floor(Math.random() * 100000000000)}`.padStart(11, '0'),
    username: id.replace(/[^a-zA-Z0-9_.-]/g, '').slice(0, 24),
    password: VALID_CREDENTIALS.password,
    ...overrides,
  };
}

# 🧪 Automação ParaBank

Suite profissional de testes end-to-end para a aplicação **ParaBank** utilizando **Playwright** e **TypeScript**.

[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)

---

## 📋 Objetivo

Automatizar cenários críticos da aplicação **ParaBank** com foco em:

✔ **Cobertura completa** de fluxos de usuário  
✔ **Manutenibilidade** através do Page Object Model  
✔ **Confiabilidade** com relatórios detalhados  
✔ **Integração CI/CD** em pipelines de automação  
✔ **Evidências** automatizadas de execução  

---

## 🎯 Destaques

### 50 Cenários de Teste Automatizados

Cobertura completa incluindo:

| Categoria | Quantia | Detalhes |
|-----------|---------|----------|
| Acesso e Registro | 8 | Login, registro, validações de acesso |
| Funcionalidade | 12 | Operações de conta, transferências, depósitos |
| Segurança | 6 | Validação de dados, proteção de conta |
| Validações | 7 | Formatos, campos obrigatórios, limites |
| Performance | 5 | Tempo de carregamento, responsividade |
| E2E Flows | 8 | Fluxos completos de usuário |
| Usabilidade | 3 | Navegação, acessibilidade |
| Perfil | 2 | Atualização e validação de perfil |
| Casos Limite | 2 | Edge cases e comportamentos extremos |

---

## 🏗️ Arquitetura

### Page Object Model (POM)

Padrão de design que melhora manutenibilidade e reduz duplicação de código:

```
src/pages/
├── BasePage.ts              # Classe base com métodos comuns
├── HomePage.ts              # Página inicial
├── LoginPage.ts             # Página de login
├── RegisterPage.ts          # Página de registro
├── AccountPage.ts           # Página de conta do usuário
└── ...
```

### Estrutura de Testes

```
tests/
├── acesso-registro.spec.ts              # Testes de login e registro
├── login.spec.ts                        # Testes de autenticação
├── conta-navegacao.spec.ts              # Navegação de conta
├── perfil.spec.ts                       # Testes de perfil
├── seguranca.spec.ts                    # Validações de segurança
├── formatos-casos-limite.spec.ts        # Edge cases
├── fluxos.spec.ts                       # E2E flows
├── desempenho.spec.ts                   # Testes de performance
├── usabilidade.spec.ts                  # Usabilidade
├── registro-validacoes.spec.ts          # Validações de registro
├── fixtures/                            # Dados de teste
└── support/                             # Funções auxiliares
```

### Utilitários e Fixtures

```
src/
├── fixtures/
│   ├── testConfig.ts        # Configuração de testes
│   └── testData.ts          # Dados de teste
├── utils/
│   ├── constants.ts         # Constantes da aplicação
│   ├── dataFactory.ts       # Geração de dados de teste
│   ├── helpers.ts           # Funções auxiliares
│   └── testHelpers.ts       # Helpers específicos de teste
```

---

## 🛠️ Tecnologias

### Automação

- **Playwright** v1.44+ - Framework de automação End-to-End
- **TypeScript** v5.3+ - Linguagem fortemente tipada
- **Node.js** v18+ - Runtime JavaScript

### Qualidade e Relatórios

- **HTML Reports** - Relatórios visuais de execução
- **Screenshots** - Capturas de tela em caso de falha
- **Videos** - Gravação de testes (quando configurado)
- **Trace** - Rastreamento detalhado de execução

### CI/CD

- **GitHub Actions** - Automação de pipeline
- **Git** - Controle de versão

---

## 🧪 Cobertura de Testes

### Funcionalidade

✅ Autenticação (login, logout, recuperação de senha)  
✅ Registro de nova conta  
✅ Navegação de conta  
✅ Operações bancárias (depósito, saque, transferência)  
✅ Atualização de perfil  
✅ Validação de dados  

### Qualidade

✅ Validações de entrada  
✅ Mensagens de erro  
✅ Estados de página  
✅ Comportamentos de limite  
✅ Responsividade  
✅ Performance  

### Segurança

✅ Proteção de dados sensíveis  
✅ Validação de autorização  
✅ Tratamento de tokens  
✅ Proteção contra XSS  

---

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos

```bash
# 1. Clonar o repositório
git clone https://github.com/Qaminerva/AutomacaoParaBank.git
cd AutomacaoParaBank

# 2. Instalar dependências
npm install

# 3. Instalar navegadores Playwright
npx playwright install

# 4. Configurar variáveis de ambiente (opcional)
# Criar arquivo .env com URLs e credenciais se necessário
```

---

## 🚀 Execução de Testes

### Executar todos os testes

```bash
npm test
```

### Executar suite específica

```bash
# Testes de login
npm test -- acesso-registro.spec.ts

# Testes de segurança
npm test -- seguranca.spec.ts

# Testes de performance
npm test -- desempenho.spec.ts
```

### Modo debug

```bash
npm test -- --debug
```

### Com relatório HTML

```bash
npm test
npx playwright show-report
```

### Testes em paralelo

```bash
npm test -- --workers=4
```

### Headless vs UI

```bash
# Headless (sem interface)
npm test

# UI (com interface)
npm test -- --ui

# Headed (browser aberto)
npm test -- --headed
```

---

## 📊 Relatórios

### HTML Report

Após a execução, visualize o relatório:

```bash
npx playwright show-report
```

O relatório inclui:

- ✅ Status de cada teste
- 📸 Screenshots de falhas
- 🎬 Vídeos de execução (se configurado)
- 📋 Trace de eventos
- ⏱️ Duração de cada teste

---

## 🔧 Configuração

### playwright.config.ts

Principais configurações:

```typescript
// Navegadores para testar
use: {
  baseURL: 'https://parabank.parasoft.com',
  trace: 'on-first-retry',
  screenshot: 'only-on-failure',
}

// Timeout de espera
timeout: 30000

// Workers para paralelização
workers: 4
```

---

## 📁 Estrutura de Arquivos

```
AutomacaoParaBank/
├── src/
│   ├── pages/                    # Page Objects
│   ├── fixtures/                 # Dados de teste
│   └── utils/                    # Funções auxiliares
├── tests/
│   ├── *.spec.ts                 # Arquivos de teste
│   ├── fixtures/                 # Fixtures do Playwright
│   └── support/                  # Dados de suporte
├── playwright-report/            # Relatórios HTML
├── test-results/                 # Resultados de execução
├── playwright.config.ts          # Configuração Playwright
├── tsconfig.json                 # Configuração TypeScript
├── package.json                  # Dependências
└── README.md                      # Este arquivo
```

---

## 💡 Padrões e Boas Práticas

### Page Object Model

```typescript
export class LoginPage extends BasePage {
  async login(email: string, password: string) {
    await this.page.fill('#email', email);
    await this.page.fill('#password', password);
    await this.page.click('button:has-text("Sign in")');
  }
}
```

### Dados de Teste

```typescript
export const testData = {
  validUser: {
    email: 'test@parabank.com',
    password: 'Test123!'
  },
  invalidEmail: 'invalid-email'
};
```

### Helpers

```typescript
export async function createRandomUser() {
  return {
    firstName: faker.name.firstName(),
    email: faker.internet.email()
  };
}
```

---

## 🐛 Troubleshooting

### Testes falhando em CI/CD

```bash
# Instalar dependências de sistema no Linux
npx playwright install-deps

# Atualizar Playwright
npm install -D @playwright/test@latest
```

### Timeout de testes

```bash
# Aumentar timeout global
npm test -- --timeout=60000
```

### Problemas de navegador

```bash
# Reinstalar navegadores
npx playwright install --with-deps
```

---

## 📚 Documentação

- [Playwright Documentation](https://playwright.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [ParaBank Application](https://parabank.parasoft.com)

---

## 🤝 Contribuição

Para contribuir com melhorias:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto é licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.

---

## 👤 Autor

**César Minerva** - QA Engineer Sênior

- LinkedIn: [@cesarminerva](https://www.linkedin.com/in/cesarminerva/)
- GitHub: [@Qaminerva](https://github.com/Qaminerva)
- Email: cesarminerva30@icloud.com

---

<div align="center">

**Construindo qualidade através da automação estratégica** 🚀

*Last Updated: 2024 | Maintained by César Minerva*

</div>

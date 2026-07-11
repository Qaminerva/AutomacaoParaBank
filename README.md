# ParaBank QA Automation Suite

<img src="https://img.shields.io/badge/Playwright-v1.61-brightgreen" alt="Playwright"> <img src="https://img.shields.io/badge/TypeScript-v7.0-blue" alt="TypeScript"> <img src="https://img.shields.io/badge/Status-Active-brightgreen" alt="Status">

Suíte completa de automação QA para **ParaBank** com **50 casos de teste** cobrindo funcionalidades críticas, segurança, performance e usabilidade.

---

## 📋 Visão Geral

- ✅ **50 Testes Automatizados** - Cobertura completa do sistema
- 🏗️ **Page Object Model** - Arquitetura escalável e mantível
- 🔧 **TypeScript** - Type-safe testing
- ⚡ **Performance Monitoring** - Testes de performance integrados
- 🔒 **Security Testing** - Validação de segurança
- 📊 **Relatórios Detalhados** - HTML reports com screenshots e vídeos
- 🏷️ **Test Tagging** - Organização por categorias (@smoke, @regression, @e2e, @security, @performance, @usability)

---

## 🚀 Começando Rápido

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação

```bash
# Clone ou extraia o projeto
cd parabank-qa-automation

# Instale as dependências
npm install

# Instale os navegadores Playwright
npx playwright install
```

---

## ▶️ Executando os Testes

### Todos os testes
```bash
npm test
```

### Modo interativo com interface gráfica
```bash
npm run test:ui
```

### Modo headed (ver o navegador)
```bash
npm run test:headed
```

### Por categoria (tags)
```bash
npm run test:smoke          # Testes de fumaça
npm run test:regression     # Testes de regressão
npm run test:e2e            # Testes end-to-end
npm run test:security       # Testes de segurança
npm run test:performance    # Testes de performance
```

### Execução paralela/serial
```bash
npm run test:parallel  # 4 workers
npm run test:serial    # 1 worker
```

### Debug e Relatórios
```bash
npm run test:debug        # Debug interativo
npm run test:report:show  # Abre relatório HTML
```

---

## 📁 Estrutura do Projeto

```
parabank-qa-automation/
├── src/
│   ├── pages/                    # Page Object Models
│   │   ├── BasePage.ts          # Base class com métodos comuns
│   │   ├── HomePage.ts          # Página inicial/login
│   │   ├── RegisterPage.ts      # Página de registro
│   │   ├── LoginPage.ts         # Página de login
│   │   └── AccountPage.ts       # Página da conta
│   │
│   ├── utils/                    # Funções utilitárias
│   │   ├── constants.ts         # Constantes e configurações
│   │   ├── dataFactory.ts       # Geração de dados de teste
│   │   └── testHelpers.ts       # Funções auxiliares
│   │
│   └── fixtures/                # Dados de teste estáticos
│       └── testData.json        # Dados pré-configurados
│
├── tests/
│   └── complete.spec.ts         # Suite com 50 testes (CT01-CT50)
│
├── test-results/                # Resultados de testes
│   ├── results.json             # Resultado em JSON
│   └── screenshots/             # Screenshots de falhas
│
├── playwright-report/           # Relatório HTML
│
├── playwright.config.ts         # Configuração Playwright
├── tsconfig.json               # Configuração TypeScript
├── package.json                # Dependências
└── README.md                   # Este arquivo
```

---

## 🧪 Casos de Teste (50 no total)

### CT01-CT02: Acesso e Registro Básico
- **CT01** - Acessar a URL do ParaBank
- **CT02** - Criar novo usuário preenchendo todos os campos

### CT03-CT07: Testes de Login
- **CT03** - Login com credenciais válidas
- **CT04** - Login com senha errada
- **CT05** - Login com usuário que não existe
- **CT06** - Login com campos vazios
- **CT07** - Logout e validar retorno à página inicial

### CT08-CT11: Registro e Validação
- **CT08** - Registrar com usuário duplicado (erro esperado)
- **CT09** - Registrar deixando campos obrigatórios vazios
- **CT10** - Registrar com senhas não coincidentes
- **CT11** - Validação de formato de campos

### CT12-CT15: Funcionalidades da Conta
- **CT12** - Verificar dados da conta após login
- **CT13** - Visualizar saldo/extrato
- **CT14** - Acesso à página de transferências
- **CT15** - Histórico de transações visível

### CT16-CT17: Perfil do Usuário
- **CT16** - Acessar página de atualização de perfil
- **CT17** - Acessar página de mudança de senha

### CT18-CT20: Segurança
- **CT18** - Link de recuperação de senha visível
- **CT19** - Tentar acessar página de conta sem estar logado
- **CT20** - Validar que logout remove credenciais

### CT21-CT26: Validação de Formatos ⚙️
- **CT21** - Validar nome com números
- **CT22** - Validar campo SSN com formato inválido
- **CT23** - Validar CEP com caracteres especiais
- **CT24** - Validar telefone com diferentes formatos
- **CT25** - Validar nome muito longo
- **CT26** - Validar username com caracteres especiais

### CT27-CT30: Fluxo Completo 🔄
- **CT27** - Registrar → Login → Visualizar Conta
- **CT28** - Login → Transferência → Logout
- **CT29** - Múltiplos acessos consecutivos
- **CT30** - Navegação entre páginas

### CT31-CT35: Edge Cases ⚠️
- **CT31** - Email com domínio incomum
- **CT32** - SSN com valor mínimo
- **CT33** - SSN com valor máximo
- **CT34** - Espaços em branco no username
- **CT35** - Senha muito longa

### CT36-CT40: Segurança 🔒
- **CT36** - Tenta SQL Injection no username
- **CT37** - Tenta XSS no campo de nome
- **CT38** - Valida HTTPS nas URLs
- **CT39** - Tenta acessar diretório de admin
- **CT40** - Valida proteção contra brute force

### CT41-CT45: Performance ⚡
- **CT41** - Tempo de carregamento da página inicial
- **CT42** - Tempo de carregamento da página de registro
- **CT43** - Tempo de processamento do login
- **CT44** - Tempo de processamento do registro
- **CT45** - Requisições simultâneas

### CT46-CT50: Usabilidade 🎨
- **CT46** - Verificar responsividade (desktop/tablet/mobile)
- **CT47** - Acessibilidade: Navegação por teclado
- **CT48** - Validar mensagens de erro claras
- **CT49** - Validar links e botões são clicáveis
- **CT50** - Validar feedback visual ao preencher formulário

---

## 🏗️ Arquitetura

### Page Object Model (POM)

Cada página é representada por uma classe que encapsula seus elementos e interações:

```typescript
// Exemplo: HomePage
class HomePage extends BasePage {
  readonly registerLink = this.page.locator('a:has-text("Register")');
  readonly loginButton = this.page.locator('input[value="Log In"]');
  
  async clickRegisterLink() {
    await this.registerLink.click();
  }
}

// Uso no teste
await homePage.clickRegisterLink();
```

### Data Factory

Geração automática de dados únicos para cada teste:

```typescript
import { UserDataFactory } from '../utils/dataFactory';

const user = UserDataFactory.createValidUser();
// Resultado: {
//   username: 'h8f3j5k9m2n6p0q4r8s2t6u0v2',
//   firstName: 'Userh8f3j5',
//   password: 'Senha@123',
//   ...
// }
```

### Test Helpers

Funções utilitárias para operações comuns:

```typescript
import { measureExecutionTime, waitForElementVisible } from '../utils/testHelpers';

// Medir tempo de execução
const time = await measureExecutionTime(async () => {
  await page.click('button');
});

// Aguardar elemento
const visible = await waitForElementVisible(page, '#element', 5000);
```

---

## 📊 Relatórios

Após executar os testes, visualize o relatório:

```bash
npm run test:report:show
```

O relatório inclui:
- ✅/❌ Status de cada teste
- 📸 Screenshots de falhas
- 🎬 Vídeos de testes (configurável)
- ⏱️ Tempo de execução
- 📋 Trace de execução para debug

---

## 🔧 Configuração

### playwright.config.ts

```typescript
use: {
  baseURL: 'https://parabank.parasoft.com/parabank',
  screenshot: 'only-on-failure',  // Screenshots apenas se falhar
  video: 'retain-on-failure',     // Vídeo apenas se falhar
  trace: 'on-first-retry'         // Trace na primeira retry
}
```

### tsconfig.json

TypeScript configurado com path aliases:

```typescript
import { HomePage } from '@pages/HomePage';
import { URLS } from '@utils/constants';
```

---

## 📝 Boas Práticas Implementadas

✅ **Page Object Model** - Separação de páginas e testes
✅ **Type Safety** - TypeScript em toda a suíte
✅ **Data Factories** - Dados gerados dinamicamente
✅ **Unique User Generation** - Usernames impossíveis de duplicar
✅ **Try-Catch Pattern** - Falhas não quebram a suíte
✅ **Test Tags** - Organização por categorias
✅ **Constants** - Valores centralizados
✅ **Descriptive Naming** - Testes com nomes claros
✅ **Performance Monitoring** - Validação de tempo de resposta
✅ **Security Testing** - Testes de SQL injection e XSS

---

## 🚨 Troubleshooting

### "Element not found"
```bash
# Execute com debug
npm run test:debug

# Veja o HTML da página
page.screenshot({ path: 'debug.png' });
```

### "Username already exists"
O ParaBank mantém todos os usuários registrados. A suíte usa IDs únicos, mas se precisar limpar:
- Acesse o admin ou entre em contato com a equipe do ParaBank

### Testes lentos
```bash
# Execute em paralelo
npm run test:parallel

# Ou aumente o timeout
npx playwright test --timeout=60000
```

---

## 📧 Suporte

Para dúvidas ou issues:
1. Verifique o relatório HTML em `playwright-report/`
2. Ative o debug mode com `--debug`
3. Consulte os logs em `test-results/`

---

## 📄 Licença

MIT

---

**Desenvolvido com ❤️ pela Equipe QA**


### `tests/register.spec.ts`
- ✅ Registrar novo usuário
- ✅ Verificar campos obrigatórios
- ✅ Validar formulário
- ✅ Testar sucesso do registro

## 📊 Relatórios

Após executar os testes, abra o relatório:
```bash
npx playwright show-report
```

## 🔍 Page Objects

### RegisterPage
Gerencia a página de registro do ParaBank.

**Métodos:**
- `goto()` - Navega para página de registro
- `fillRegistrationForm()` - Preenche formulário
- `register()` - Clica em registrar
- `isSuccessMessageVisible()` - Verifica sucesso

## 📝 Exemplo de Uso

```typescript
import { RegisterPage } from '@pages/RegisterPage';

test('meu teste', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await registerPage.goto();
  await registerPage.fillRegistrationForm({
    firstName: 'João',
    lastName: 'Silva',
    // ... outros dados
  });
  await registerPage.register();
});
```

## 🛠️ Configurações

### Navegadores Testados
- Chrome/Chromium
- Firefox
- Safari/WebKit

### Recursos
- Screenshots em falhas
- Vídeos em falhas
- Traces para debug
- Relatório HTML
- Tentativas automáticas em falhas

## 📚 Links Úteis

- [Documentação Playwright](https://playwright.dev)
- [ParaBank (Aplicação de Teste)](https://parabank.parasoft.com/parabank)
- [Guia TypeScript](https://www.typescriptlang.org/docs)

## 👤 Autor

César Minerva Analista de Qualidade SR

## 📄 Licença

ISC
#
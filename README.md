# 🚀 Automação ParaBank - Suite de QA

[![Playwright](https://img.shields.io/badge/Playwright-v1.44-brightgreen)](https://playwright.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.3-blue)](https://www.typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-16%2B-green)](https://nodejs.org)
[![Status](https://img.shields.io/badge/Status-Ativo-brightgreen)](https://github.com/Qaminerva/AutomacaoParaBank)

Suite completa de automação de testes para **ParaBank** com **50 casos de teste** cobrindo funcionalidades críticas, segurança, desempenho e usabilidade.

---

## 📋 Visão Geral

- ✅ **50 Testes Automatizados** - Cobertura end-to-end
- 🏗️ **Page Object Model** - Arquitetura escalável
- 🔧 **TypeScript** - Type safety garantido
- ⚡ **Monitoramento de Performance** - Validação de tempos
- 🔒 **Testes de Segurança** - Injeção SQL, XSS, autenticação
- 📊 **Relatórios Detalhados** - HTML com screenshots e vídeos
- 🏷️ **Test Tagging** - Organização por categorias

---

## 🚀 Quick Start

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação

\`\`\`bash
git clone https://github.com/Qaminerva/AutomacaoParaBank.git
cd AutomacaoParaBank
npm install
npx playwright install
\`\`\`

### Executar Testes

\`\`\`bash
npm test                    # Todos os testes
npm run test:ui            # Modo interativo
npm run test:headed        # Com navegador visível
npm run test:report:show   # Ver relatório
\`\`\`

---

## 📁 Estrutura do Projeto

\`\`\`
AutomacaoParaBank/
├── src/
│   ├── pages/              # Page Object Models
│   ├── fixtures/           # Dados de teste
│   └── utils/              # Funções auxiliares
├── tests/                  # Arquivos de teste
├── docs/images/            # Imagens e diagramas
├── .github/workflows/      # CI/CD
└── README.md
\`\`\`

---

## 🧪 50 Casos de Teste

| Categoria | Casos | Status |
|-----------|-------|--------|
| Acesso & Registro | CT01-CT02 | ✅ |
| Login | CT03-CT07 | ✅ |
| Registro | CT08-CT11 | ✅ |
| Conta | CT12-CT15 | ✅ |
| Perfil | CT16-CT17 | ✅ |
| Segurança | CT18-CT20, CT36-CT40 | ✅ |
| Formatos | CT21-CT26 | ✅ |
| Fluxos | CT27-CT30 | ✅ |
| Edge Cases | CT31-CT35 | ✅ |
| Performance | CT41-CT45 | ✅ |
| Usabilidade | CT46-CT50 | ✅ |
| **TOTAL** | **50** | **✅** |

---

## 📊 Relatórios

Após executar os testes:

\`\`\`bash
npm run test:report:show
\`\`\`

---

## 🤝 Contribuindo

Veja [CONTRIBUTING.md](CONTRIBUTING.md) para diretrizes.

---

## 📄 Licença

MIT

## 👨‍💼 Autor

**César Minerva**  
**QA SR** - Analista de Qualidade Sênior

---

<div align="center">

**Desenvolvido com ❤️**

[![GitHub](https://img.shields.io/badge/GitHub-Qaminerva-blue?logo=github)](https://github.com/Qaminerva)
[![Email](https://img.shields.io/badge/Email-cesarminerva30%40icloud.com-red)](mailto:cesarminerva30@icloud.com)

</div>
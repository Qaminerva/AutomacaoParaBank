# 🎯 Automação ParaBank - QA Automation Suite

[![Playwright](https://img.shields.io/badge/Playwright-v1.44-2EAD33?style=for-the-badge&logo=playwright)](https://playwright.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue?style=for-the-badge&logo=github)](https://github.com/features/actions)

> 🚀 Suite profissional de automação de testes End-to-End desenvolvida com **Playwright + TypeScript**, aplicando boas práticas de Engenharia de Qualidade de Software.

---

## 🎯 Objetivo do Projeto

O objetivo desta automação é validar os principais fluxos críticos da aplicação **ParaBank**, garantindo maior confiabilidade nas entregas, redução do esforço manual em testes regressivos e geração rápida de feedback para o time de desenvolvimento.

A solução foi estruturada pensando em:

- Qualidade contínua
- Escalabilidade dos testes
- Manutenibilidade do código
- Evidências automatizadas
- Integração com processos CI/CD

---

## 🎖️ Principais Destaques

✅ **50 casos de testes automatizados**  
🚀 Arquitetura baseada em **Page Object Model (POM)**  
🔐 Testes de segurança e validações negativas  
⚡ Monitoramento de performance  
🔒 Cenários de autenticação e autorização  
📊 Relatórios HTML detalhados  
📸 Screenshots e vídeos em caso de falhas  
🤖 Preparado para execução em pipelines CI/CD  

---

## 🏗️ Arquitetura da Automação

A automação utiliza o padrão **Page Object Model (POM)**, permitindo:

- Separação entre código de teste e elementos da aplicação
- Reutilização de componentes
- Maior organização dos cenários
- Facilidade de manutenção
- Evolução contínua da suíte

### Estrutura do Projeto
AutomacaoParaBank/
├── src/
│ ├── pages/ # Page Objects
│ ├── fixtures/ # Massa de dados
│ └── utils/ # Funções auxiliares
├── tests/ # Cenários automatizados
├── reports/ # Relatórios de execução
├── docs/ # Documentações
├── .github/workflows/ # Pipeline CI/CD
└── README.md

---

## 📊 Cobertura de Testes

A suíte contempla **50 cenários automatizados**, distribuídos nas principais áreas:

| Categoria | Cenários | Status |
|-----------|----------|--------|
| Cadastro e Registro | CT01 - CT11 | ✅ |
| Login e Autenticação | CT03 - CT07 | ✅ |
| Gestão de Conta | CT12 - CT15 | ✅ |
| Perfil de Usuário | CT16 - CT17 | ✅ |
| Segurança | CT18 - CT20 / CT36 - CT40 | ✅ |
| Validação de Formatos | CT21 - CT26 | ✅ |
| Fluxos de Negócio | CT27 - CT30 | ✅ |
| Cenários Negativos | CT31 - CT35 | ✅ |
| Performance | CT41 - CT45 | ✅ |
| Usabilidade | CT46 - CT50 | ✅ |

**Total: 🚀 50 testes automatizados**

---

## 🔐 Estratégia de Qualidade

A automação contempla diferentes tipos de validação:

### Testes Funcionais
- Cadastro de usuários
- Login
- Navegação
- Fluxos bancários
- Validações de regras

### Testes de Segurança
- Autenticação inválida
- Validação de entradas
- SQL Injection
- XSS
- Controle de acesso

### Testes de Performance
Validação de:
- Tempo de resposta
- Carregamento das páginas
- Execução dos principais fluxos

### Testes de Usabilidade
Validação de:
- Mensagens ao usuário
- Experiência de navegação
- Comportamento dos componentes

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Utilização |
|------------|------------|
| Playwright | Automação End-to-End |
| TypeScript | Desenvolvimento seguro e escalável |
| Node.js | Ambiente de execução |
| Git | Controle de versão |
| GitHub Actions | Integração Contínua |
| HTML Report | Evidências de execução |

---

## 🚀 Execução do Projeto

### Pré-requisitos

Necessário possuir instalado:

- Node.js 18+
- npm
- Git

### 📥 Instalação

```bash
# Clone o repositório
git clone https://github.com/Qaminerva/AutomacaoParaBank.git

# Acesse a pasta
cd AutomacaoParaBank

# Instale as dependências
npm install

# Instale os navegadores do Playwright
npx playwright install
```

---

## 🚀 Executar Todos os Testes

### Executar todos os testes
npm test

### Executar em modo interativo
npm run test:ui

### Executar com navegador visível
npm run test:headed

### Visualizar relatório HTML
npm run test:report:show


📊 Evidências e Relatórios
Após a execução dos testes, a automação gera:

✅ Relatório HTML
✅ Screenshots em caso de falhas
✅ Vídeos das execuções
✅ Logs detalhados
✅ Histórico dos testes

Essas evidências auxiliam:

Investigação de defeitos
Análise de regressão
Comunicação com desenvolvimento
Melhoria contínua da qualidade

📈 Benefícios Entregues
✔ Redução do esforço manual em testes regressivos
✔ Maior confiabilidade nas entregas de software
✔ Feedback rápido para desenvolvimento
✔ Padronização dos cenários de testes
✔ Maior cobertura dos fluxos críticos
✔ Base preparada para evolução contínua

👨‍💻 Desenvolvedor
César Minerva
QA Engineer | Analista de Qualidade Sênior

Profissional especializado em:

✔ Testes Manuais e Automatizados
✔ Automação End-to-End
✔ Testes API REST
✔ Estratégia de Qualidade
✔ CI/CD
✔ Metodologias Ágeis

🚀 Conhecimentos Técnicos
Automação: Playwright • Cypress • Selenium
API Testing: Postman • REST API
DevOps: Git • GitHub Actions • Azure DevOps
Gestão: Jira • Confluence • Scrum • Kanban
Banco de Dados: SQL

<div align="center">

<img src="https://img.shields.io/badge/GitHub-@Qaminerva-black?style=for-the-badge&amp;logo=github" alt="GitHub">

<img src="https://img.shields.io/badge/Email-cesarminerva30@icloud.com-red?style=for-the-badge&amp;logo=icloud" alt="Email">

⭐ Projeto desenvolvido aplicando princípios de Engenharia de Qualidade de Software

🚀 Quality Engineering | Test Automation | Continuous Improvement

Desenvolvido com ❤️ & ☕

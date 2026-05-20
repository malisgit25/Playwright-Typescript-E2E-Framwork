# Playwright TypeScript E2E Framework

A robust, scalable End-to-End test automation framework built with **Playwright** and **TypeScript**, following the **Page Object Model (POM)** design pattern.

## Tech Stack

| Tool | Description |
|------|-------------|
| [Playwright](https://playwright.dev/) | Browser automation framework |
| [TypeScript](https://www.typescriptlang.org/) | Strongly typed JavaScript |
| [Node.js](https://nodejs.org/) | >= 18.x |
| [Allure](https://allurereport.org/) | Test reporting |

---

## 📁 Project Structure

Playwright-Typescript-E2E-Framework/
├── .github/                        # GitHub Actions CI/CD workflows
├── allure-report/                  # Generated Allure HTML reports
├── allure-results/                 # Raw Allure result files
├── config/                         # Environment and framework configuration
├── fixtures/                       # Playwright fixtures and test setup
├── logs/                           # Execution log files
├── pages/                          # Page Object Model (POM) classes
│   ├── ApplyManuallyPage.ts
│   ├── ApplyPage.ts
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── MyInformationPage.ts
│   └── SearchAndApplyPage.ts
├── playwright-report/              # Playwright HTML reports
├── reports/                        # Additional test reports
├── screenshots/                    # Screenshots captured on failure
├── test-data/                      # Test data files (JSON, etc.)
├── test-results/                   # Raw test result artifacts
├── tests/                          # Test spec files
├── traces/                         # Playwright trace files
├── utils/                          # Helper utilities and common functions
├── videos/                         # Videos captured on failure
├── .gitignore                      # Git ignore rules
├── package.json                    # Project dependencies and scripts
├── package-lock.json               # Locked dependency versions
├── playwright.config.ts            # Playwright configuration
├── tsconfig.json                   # TypeScript configuration
└── README.md

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the Repository

git clone https://github.com/malisgit25/Playwright-Typescript-E2E-Framwork.git
cd Playwright-Typescript-E2E-Framwork
### 2. Install Dependencies

npm install
### 3. Install Playwright Browsers
npx playwright install

## ▶️ Running Tests

### Run All Tests

npx playwright test

### Run a Specific Test File

npx playwright test tests/login.spec.ts

### Run Tests in a Specific Browser

npx playwright test --project=chromium
npx playwright test --project=edge
### Run Tests in Headed Mode

npx playwright test --headed

### Run Tests in Debug Mode

npx playwright test --debug

## 📊 Test Reports

### Playwright HTML Report

npx playwright show-report

### Allure Report

# Generate and open Allure report
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report

Reports, screenshots, videos, and traces are saved automatically after each test run.

## ⚙️ Configuration

The framework is configured via `playwright.config.ts`:

typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: 'https://your-app-url.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox',  use: { browserName: 'firefox'  } },
    { name: 'webkit',   use: { browserName: 'webkit'   } },
  ],
  reporter: [['html'], ['allure-playwright']],
});


## 🏗️ Design Patterns

- **Page Object Model (POM)** — each page has its own class (e.g., `LoginPage.ts`, `ApplyPage.ts`)
- **Base Page** — `BasePage.ts` contains shared methods inherited by all page classes
- **Fixtures** — custom Playwright fixtures for reusable test setup and teardown
- **Data-Driven Testing** — external test data stored in `test-data/`
- **Environment Config** — environment-specific settings managed in `config/`

## 📌 Key Features

- ✅ Cross-browser testing (Chromium, Firefox, WebKit)
- ✅ Page Object Model architecture
- ✅ Allure & Playwright HTML reporting
- ✅ Screenshots, videos, and traces on failure
- ✅ Parallel test execution
- ✅ CI/CD ready with GitHub Actions
- ✅ TypeScript type safety throughout


## 👤 Author

**Malis** — [GitHub Profile](https://github.com/malisgit25)



## 📄 License

This project is licensed under the [MIT License](LICENSE).

# Playwright + Serenity/JS ScreenPlay AI Starter

[![Serenity/JS](https://img.shields.io/npm/v/%40serenity-js%2Fcore?style=flat&logoColor=%23FBD30B&label=Serenity%2FJS&color=%23FBD30B)](https://serenity-js.org/releases/)
[![Playwright](https://img.shields.io/badge/Playwright-1.64.1-green?logo=playwright)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE.md)

This repository is a production-ready **test automation starter template** designed to demonstrate and implement automated end-to-end testing flows across **Web UI**, **REST APIs**, and **AI / LLM Endpoints**.

Built on **Playwright Test**, **Serenity/JS**, and **TypeScript**, it leverages the **ScreenPlay Pattern** to provide maintainable, business-readable, and deterministic test suites with interactive living documentation.

---

## 🎯 What Does This Template Cover?

This starter is specifically tailored to demo and validate three critical testing tiers in modern applications:

### 1. 🖥️ Web UI Automation (ScreenPlay Pattern)
- End-to-end user journeys using declarative, actor-centric tasks (`actorCalled('Alice').attemptsTo(...)`).
- Resilient locators via semantic queries (`By.role()`, `By.label()`, `By.css()`) with Serenity/JS web-first synchronization (`Wait.until`, `Ensure.that`).
- Multi-actor and multi-browser scenarios (demonstrating real-time collaboration and session isolation).
- Elimination of flaky sleeps, brittle XPaths, and tightly-coupled page-object logic.

### 2. ⚡ REST API & Blended Testing
- Fast, reliable HTTP/REST contract validation using `@serenity-js/rest`.
- Direct verification of HTTP status codes, headers, and payload structures.
- **Blended scenarios**: Pre-conditioning test state via API before executing UI interactions, dramatically reducing test execution times.

### 3. 🤖 AI & LLM Endpoints Quality Gate
If your application integrates Large Language Models (LLMs), AI agents, or generative services, standard testing is not enough. This template includes dedicated quality gate scenarios (`spec/llm_quality_gate.spec.ts`) demonstrating:
- **Automated Validation of JSON Structures & Responses:** Validates deterministic structured outputs (`response_format: 'json_object'`), key presence, schema conformity, and data integrity from model responses.
- **SLA & Maximum Response Times (*Tiempos Máximos de Respuesta*):** Enforces strict performance and latency thresholds (`isLessThan(MAX_LATENCY_MS)`) to ensure AI generation speeds satisfy production Service Level Agreements (SLAs).
- **Failure Management & Boundary Security:** Tests handling of API errors, rate limits, and adversarial inputs (prompt injection defense, system prompt leak prevention, and boundary guardrail enforcement).

---

## 📊 Living Documentation & Reports

Every test execution automatically generates rich, interactive reports:

- **Serenity/JS HTML Reporter**: Comprehensive living documentation detailing actor activities, HTTP requests/responses, step-by-step screenshots on failure, and execution trends.
- **Playwright HTML Report**: Detailed browser execution logs, traces, and timing diagrams.

```shell
# Open the interactive Serenity/JS report in your browser
npm run test:report
```

---

## 🏗️ Project Architecture (ScreenPlay Pattern)

Following the ISTQB and Serenity/JS ScreenPlay architectural guidelines, logic is strictly separated into modular, reusable components:

```
playwright-screenplay-ai-starter/
├── spec/
│   ├── api_testing.spec.ts             # REST API testing examples
│   ├── blended_testing.spec.ts         # Combined API pre-conditions + UI validation
│   ├── llm_quality_gate.spec.ts        # AI / LLM JSON contract, SLA latency & guardrails
│   ├── multi-actor_scenarios.spec.ts   # Multi-actor concurrent browser tests
│   ├── recording_items.spec.ts         # ScreenPlay UI web scenarios
│   ├── using_notes.spec.ts             # Data sharing across actors & sessions
│   ├── vanilla_playwright_test.spec.ts # Standard Playwright Test baseline comparison
│   │
│   ├── github/                         # GitHub API ScreenPlay domain components
│   │   └── GitHubStatus.ts
│   ├── saucedemo/                      # E-commerce flow components (UI, Tasks, Questions)
│   │   ├── ui/                         # Resilient locators & page element definitions
│   │   ├── tasks/                      # Business actions (e.g., Login, AddProductToCart)
│   │   └── questions/                  # Inquiries and assertions (e.g., CartBadgeCount)
│   └── todo-list-app/                  # Reference domain tasks, questions & data
│
├── reports/                            # Generated test reports (Playwright & Serenity/JS)
├── playwright.config.ts                # Playwright configuration & Serenity/JS stage setup
├── tsconfig.json                       # TypeScript compiler options
└── package.json                        # Dependencies, scripts and project metadata
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version `^20`, `^22`, or `^24`)
- npm (comes with Node.js)

### 1. Clone & Install

```shell
git clone <repository-url>
cd playwright-screenplay-ai-starter
npm ci
npx playwright install
```

### 2. Run Tests

```shell
# Run all tests across configured browsers (Chromium, Firefox, WebKit)
npm test

# Run tests on Chromium only
npm test -- --project=chromium

# Run specifically the AI / LLM Quality Gate tests
npm test -- spec/llm_quality_gate.spec.ts

# Run tests in headed mode (visible browser window)
npm test -- --headed

# Run tests matching a specific tag or name
npm test -- --grep "AI & LLM"
```

### 3. Linting & Code Quality

```shell
# Check code style and ScreenPlay rules
npm run lint

# Automatically fix linting issues
npm run lint:fix
```

---

## ⚙️ Configuration & Environment Variables

- **Base URL:** Defined in [`playwright.config.ts`](playwright.config.ts) under `use.baseURL`.
- **AI / LLM Endpoint URL:** Can be overridden via environment variable in your CI/CD pipelines:
  ```shell
  export AI_AGENT_URL="https://your-ai-service.example.com/v1/chat/completions"
  npm test -- spec/llm_quality_gate.spec.ts
  ```
- **CI Mode:** When running on CI (`CI=true`), workers are limited to 1, retries are automatically enabled, and tests run in full headless mode.

---

## 📄 License

This project is licensed under the [Apache-2.0 License](LICENSE.md).
Serenity/JS is an open-source project created and maintained by [Jan Molak](https://github.com/jan-molak) and the Serenity/JS Community.

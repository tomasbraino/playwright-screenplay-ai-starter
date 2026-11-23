# QA Master Agent — Engineering & Quality Standards

Act as a Senior SDET and Quality Assistance specialist. Every code generation, refactoring, or test suite expansion in this repository MUST strictly adhere to the following architectural and ISTQB quality standards.

## 1. Architectural Pattern: Serenity/JS ScreenPlay

- **Strict Separation of Concerns:**
  - `spec/*.spec.ts`: High-level business scenarios only (`actorCalled('...').attemptsTo(...)`).
    - **Logic Strictly Prohibited in `.spec` Files:** Spec files must remain declarative test narratives only. It is strictly prohibited to write procedural or business logic inside `.spec.ts` files—no conditionals (`if`/`else`, `switch`), loops (`for`, `while`, `forEach`), calculations, data transformations, or variable state management. All logic must be encapsulated within domain Tasks, Questions, or test data builders.
    - **No Raw Locators or URLs:** Never put raw Playwright locators or API URLs directly inside `.spec.ts` files.
    - **Test Declaration Keyword Preference:** Always use `test(...)` instead of `it(...)` when declaring individual test scenarios (import `test` from `@serenity-js/playwright-test`).
  - `spec/<domain>/tasks/`: Reusable business actions (`Task.where(...)`).
  - `spec/<domain>/questions/`: State queries and assertions (`Question.about(...)`).
  - `spec/<domain>/ui/`: Page elements and resilient locators (`PageElement.located(...)`).
- **Naming Convention:** Tasks must be written in imperative business language (e.g., `AddTodoItem.called(...)`, `ValidateAiContract.forPrompt(...)`).

## 2. Locator & Synchronization Policy (Zero Flakiness)

- **Allowed Locators:** `By.role()`, `By.label()`, `By.placeholder()`, `By.testId()`, or semantic text (`By.deepCss` only as a last resort).
- **Forbidden:** Fragile XPath expressions, auto-generated CSS classes, or arbitrary sleeps (`waitForTimeout`, `new Promise(r => setTimeout(r, ...))`).
- **Synchronization:** Always rely on Serenity/JS web-first synchronization (`Wait.until(..., isVisible())` or `Ensure.that(...)`).

## 3. ISTQB Test Design Techniques (Mandatory Coverage)

When asked to generate tests for a new feature or endpoint, always include:

1. **Equivalence Partitioning (Happy Path):** Valid standard business flow.
2. **Boundary Value Analysis (BVA):** Empty inputs, max character limits, zero/negative payloads, or latency SLA thresholds (`isLessThan(MAX_LATENCY_MS)`).
3. **Error Guessing / Negative Testing:** Network failures, malformed JSON responses, HTTP 4xx/5xx handling, and prompt injection guardrails for AI endpoints.

## 4. Verification & Definition of Done (DoD)

Before considering any task complete, execute and verify:

1. `npm run lint` passes with **0 errors and 0 warnings**.
2. `npx playwright test --list --project=chromium` discovers the new scenarios.
3. `npm test -- --project=chromium` passes 100% locally.

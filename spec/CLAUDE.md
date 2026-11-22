# Claude SDET Instructions

Read and strictly follow all architectural, ScreenPlay, locator, and ISTQB testing standards defined in `@AGENTS.md`.

## Code Review & Output Rules

- **Modular Code Only:** Provide clean, strongly-typed TypeScript (no `any`).
- **Root Cause Analysis:** When debugging a test or CI failure, identify the root cause first (Environment vs. Test Code vs. Application Defect) before proposing a fix.
- **Directory Constraint:** Place executable test files directly inside `./spec/*.spec.ts` so `playwright.config.ts` discovers them automatically, keeping helper tasks/questions in subfoldrs.

# GrabDocs E2E (Cypress + Playwright)

This repo contains **two end‑to‑end test suites** for GrabDocs using **Cypress** and **Playwright**.
It is structured so you can demo either framework live in class and defend your choices.

## Setup
1) Install Node 20+
2) `cp .env.sample .env` and fill in real creds for two test users.
3) `npm i`
4) Choose a framework:
   - **Cypress**: `npm run cy:open` (headed) or `npm run cy:run` (headless)
   - **Playwright**: `npx playwright install` then `npm run pw:test` and `npm run pw:report`

> All specs assume selectors like `[data-testid="..."]`. If GrabDocs doesn't expose these,
> switch to role/text queries or add an extension/selector map (see comments in page objects).

## Features Covered
1. Auth: login/logout
2. Create document (title + content)
3. Rename document
4. Autosave/version badge appears
5. Search documents from dashboard
6. Share document (invite collaborator by email)
7. Permission enforcement (viewer cannot edit; editor can)
8. Comment on document + resolve
9. Upload/attach file (if supported) or paste image
10. Real‑time presence indicator (smoke check other user avatar)
11. Delete (move to trash) and restore
12. Settings: dark mode toggle persists

## CI/Reporting
- Add to GitHub Actions or GitLab CI by caching `~/.cache/ms-playwright` and `node_modules`.
- Artifacts: Cypress videos/screenshots under `cypress/`, Playwright HTML report via `npm run pw:report`.

## Demo Script (10–12 min)
1. Explain selector strategy + env vars.
2. Run `cy:open`, execute `auth.cy` and `document-crud.cy` interactively.
3. Show Playwright parallel run + trace viewer on a failing spec.
4. Conclude with coverage list and flake mitigations (auto‑waits, test isolation, retry).


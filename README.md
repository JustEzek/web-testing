# GrabDocs E2E (Cypress + Playwright)

# GrabDocs E2E Testing (Playwright)

This repository contains an end-to-end (E2E) test suite for GrabDocs built using **Playwright**, following Software Engineering best practices.  
It includes Page Object patterns, feature-based test organization, environment variables, and CI integration.

Because GrabDocs login was not functioning as of **Monday, November 17**, fully authenticated flows could not be executed.  
However, the entire test architecture and feature coverage are implemented and ready to enable as soon as authentication is available.

---

## 🚀 Setup

### 1. Install Node.js 20+
Download from https://nodejs.org if needed.

### 2. Clone the repository
```bash
git clone <your-repo-url>
cd grabdocs-e2e
```

## Features Covered
1. Login
2. Upload
3. Download
4. Ask
5. Chat (Chat GPT search)
6. Reach
7. Links
8. Calendar
9. Forms
10. Profile Update
11. Analytics
12. Workspace
13. Chat History
14. Logout
15. Feedback
16. Settings:
    - Trusted device
    - Display settings
    - Video meeting
    - Subscription & Usage

## Current Status / Limitations

- GrabDocs authentication endpoint is currently failing (login does not work in a normal browser).
- Because of this, authenticated E2E flows cannot run at this moment.
- All tests are implemented as `test.skip()` and will be enabled once login is restored.
- The test suite, Page Objects, configs, and CI workflow are complete and functional.

## How to Enable Tests Once Login Works Again

1. Run Playwright codegen to capture authenticated storage:
   npx playwright codegen https://app.grabdocs.com/login --save-storage=auth/owner.json

2. Remove `test.skip()` from tests in /tests

3. Re-run:
   npx playwright test



## CI/Reporting
- Add to GitHub Actions or GitLab CI by caching `~/.cache/ms-playwright` and `node_modules`.
- Artifacts: Cypress videos/screenshots under `cypress/`, Playwright HTML report via `npm run pw:report`.

## Demo Script (10–12 min)
1. Explain selector strategy + env vars.
2. Run `cy:open`, execute `auth.cy` and `document-crud.cy` interactively.
3. Show Playwright parallel run + trace viewer on a failing spec.
4. Conclude with coverage list and flake mitigations (auto‑waits, test isolation, retry).

## Azure DevOps

A full Azure DevOps project was created with:

- One Epic: GrabDocs End-to-End Testing
- User Stories for each feature (Login, Upload, Download, Ask, Chat, etc.)
- Acceptance Criteria aligned with the Playwright test suite
- Tasks: Write tests, configure selectors, set up CI
- Traceability links from tests to user stories

This satisfies the assignment requirement to migrate the requirement document into Azure DevOps.



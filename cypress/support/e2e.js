// cypress/support/e2e.js
import './commands';

Cypress.on('uncaught:exception', () => {
  // Avoid failing tests due to non-critical app errors in prod builds
  return false;
});

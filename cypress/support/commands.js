// cypress/support/commands.js

Cypress.Commands.add('loginUI', (email, password) => {
  cy.session([email], () => {
    cy.visit('/login');
    cy.get('[data-testid="email-input"]').type(email);
    cy.get('[data-testid="password-input"]').type(password, { log: false });
    cy.get('[data-testid="login-submit"]').click();
    cy.get('[data-testid="dashboard"]').should('be.visible');
  });
});

/**
 * If GrabDocs uses localStorage/sessionStorage tokens, persist them here
 */
Cypress.Commands.add('logoutUI', () => {
  cy.get('[data-testid="user-menu"]').click();
  cy.get('[data-testid="logout"]').click();
  cy.get('[data-testid="login-submit"]').should('be.visible');
});

// cypress/pages/LoginPage.js
export class LoginPage {
  visit() { cy.visit('/login'); }
  fill(email, password) {
    cy.get('[data-testid="email-input"]').type(email);
    cy.get('[data-testid="password-input"]').type(password, { log:false });
  }
  submit() { cy.get('[data-testid="login-submit"]').click(); }
}

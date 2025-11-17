// cypress/e2e/auth.cy.js
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

describe('Auth', () => {
  const login = new LoginPage();
  const dash = new DashboardPage();

  it('logs in and logs out through the UI', () => {
    cy.visit('/');
    login.visit();
    login.fill(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'));
    login.submit();
    dash.assertLoaded();
    cy.logoutUI();
  });
});

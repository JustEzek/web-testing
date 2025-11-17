// cypress/e2e/document-crud.cy.js
import { DashboardPage } from '../pages/DashboardPage';
import { DocPage } from '../pages/DocPage';

describe('Document CRUD + Share', () => {
  const dash = new DashboardPage();
  const doc = new DocPage();

  beforeEach(() => {
    cy.loginUI(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'));
  });

  it('creates, edits, renames, comments, shares, and deletes a doc', () => {
    cy.visit('/app');
    dash.assertLoaded();
    dash.createDoc();

    doc.setTitle('E2E Demo Doc');
    doc.typeBody('Hello from Cypress!');
    doc.rename('E2E Demo Doc v2');

    doc.addComment('Looks good to me.');
    doc.openShare();
    doc.invite(Cypress.env('SECOND_USER_EMAIL'), 'Viewer');

    // simple autosave badge check
    cy.get('[data-testid="save-status"]').should('contain.text','Saved');

    doc.deleteDoc();
    cy.get('[data-testid="toast"]').should('contain.text','moved to trash');
  });
});

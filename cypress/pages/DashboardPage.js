// cypress/pages/DashboardPage.js
export class DashboardPage {
  assertLoaded(){ cy.get('[data-testid="dashboard"]').should('be.visible'); }
  createDoc(){ cy.get('[data-testid="new-doc"]').click(); }
  search(q){ cy.get('[data-testid="search-input"]').clear().type(q); }
  openFirstResult(){ cy.get('[data-testid="doc-card"]').first().click(); }
}

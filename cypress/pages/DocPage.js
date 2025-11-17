// cypress/pages/DocPage.js
export class DocPage {
  setTitle(title){ cy.get('[data-testid="doc-title"]').clear().type(title); }
  typeBody(text){ cy.get('[data-testid="doc-editor"]').type(text); }
  rename(newName){ cy.get('[data-testid="doc-title"]').clear().type(newName+'{enter}'); }
  openShare(){ cy.get('[data-testid="share-button"]').click(); }
  invite(email, role='Editor'){
    cy.get('[data-testid="share-email"]').type(email);
    cy.get('[data-testid="share-role"]').select(role);
    cy.get('[data-testid="share-confirm"]').click();
  }
  addComment(text){
    cy.get('[data-testid="comment-button"]').click();
    cy.get('[data-testid="comment-input"]').type(text);
    cy.get('[data-testid="comment-send"]').click();
  }
  toggleDarkMode(){
    cy.get('[data-testid="more-menu"]').click();
    cy.get('[data-testid="toggle-dark"]').click();
  }
  deleteDoc(){
    cy.get('[data-testid="more-menu"]').click();
    cy.get('[data-testid="move-to-trash"]').click();
    cy.get('[data-testid="confirm-delete"]').click();
  }
}

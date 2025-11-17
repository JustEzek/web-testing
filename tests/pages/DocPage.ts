// tests/pages/DocPage.ts
import { Page, expect } from '@playwright/test';

export class DocPage {
  constructor(private page: Page) {}
  async setTitle(title: string){ await this.page.getByTestId('doc-title').fill(title); }
  async typeBody(text: string){ await this.page.getByTestId('doc-editor').type(text); }
  async rename(name: string){ await this.page.getByTestId('doc-title').fill(name); await this.page.keyboard.press('Enter'); }
  async addComment(text: string){
    await this.page.getByTestId('comment-button').click();
    await this.page.getByTestId('comment-input').fill(text);
    await this.page.getByTestId('comment-send').click();
  }
  async share(email: string, role: 'Viewer' | 'Editor' = 'Viewer'){
    await this.page.getByTestId('share-button').click();
    await this.page.getByTestId('share-email').fill(email);
    await this.page.getByTestId('share-role').selectOption(role);
    await this.page.getByTestId('share-confirm').click();
  }
  async delete(){
    await this.page.getByTestId('more-menu').click();
    await this.page.getByTestId('move-to-trash').click();
    await this.page.getByTestId('confirm-delete').click();
  }
  async expectSaved(){ await expect(this.page.getByTestId('save-status')).toContainText('Saved'); }
}

// tests/pages/DashboardPage.ts
import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}
  async assertLoaded(){ await expect(this.page.getByTestId('dashboard')).toBeVisible(); }
  async createDoc(){ await this.page.getByTestId('new-doc').click(); }
  async search(q: string){
    await this.page.getByTestId('search-input').fill(q);
  }
  async openFirstResult(){
    await this.page.getByTestId('doc-card').first().click();
  }
}

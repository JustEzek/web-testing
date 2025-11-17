// tests/pages/LoginPage.ts
import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}
  async goto(){ await this.page.goto('/login'); }
  async login(email: string, password: string){
    await this.page.getByTestId('email-input').fill(email);
    await this.page.getByTestId('password-input').fill(password);
    await this.page.getByTestId('login-submit').click();
    await expect(this.page.getByTestId('dashboard')).toBeVisible();
  }
}

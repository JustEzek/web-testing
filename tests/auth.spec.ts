// tests/auth.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('login + logout', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  await page.getByTestId('user-menu').click();
  await page.getByTestId('logout').click();
  await expect(page.getByTestId('login-submit')).toBeVisible();
});

import { test, expect } from '@playwright/test';

// Feature 14 – Logout
test.skip('Logout – return to login screen (BLOCKED)', async ({ page }) => {
  await page.goto('/app');

  await page.getByTestId('user-menu').click();
  await page.getByRole('menuitem', { name: /Logout/i }).click();

  await expect(page).toHaveURL(/\/login/);
  await expect(page.getByRole('button', { name: /Sign in/i })).toBeVisible();
});

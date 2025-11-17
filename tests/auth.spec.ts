import { test, expect } from '@playwright/test';

test.skip('Login with valid credentials (BLOCKED – GrabDocs login issue)', async ({ page }) => {
  // Intended flow once login works:
  // Given I am on the /login page
  await page.goto('/login');

  // When I enter my email and password
  await page.getByPlaceholder('Email').fill('your_email_here');
  await page.getByPlaceholder('Password').fill('********');

  // And I click Sign in and complete OTP
  await page.getByRole('button', { name: /Sign in/i }).click();
  // OTP step would go here if automation were allowed

  // Then I should land on /app and see the dashboard
  await expect(page).toHaveURL(/\/app/);
  await expect(page.getByTestId('dashboard')).toBeVisible();
});


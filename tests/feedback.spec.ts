import { test, expect } from '@playwright/test';

// Feature 15 – Feedback
test.skip('Feedback – submit app feedback (BLOCKED)', async ({ page }) => {
  await page.goto('/app');

  await page.getByTestId('feedback-open').click();
  await page.getByTestId('feedback-text').fill('The document search could be faster and more accurate.');
  await page.getByTestId('feedback-submit').click();

  await expect(page.getByText(/Thank you for your feedback/i)).toBeVisible();
});

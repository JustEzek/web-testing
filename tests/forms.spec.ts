import { test, expect } from '@playwright/test';

// Feature 9 – Forms
test.skip('Forms – create and submit a feedback form (BLOCKED)', async ({ page }) => {
  await page.goto('/app/forms');

  // Create a new form
  await page.getByTestId('new-form-button').click();
  await page.getByTestId('form-title-input').fill('Bug Report Form');
  await page.getByTestId('add-field-text').click();
  await page.getByTestId('form-save').click();

  // Preview and submit the form
  await page.getByTestId('form-preview').click();
  await page.getByTestId('form-field-0').fill('The export feature is not working as expected.');
  await page.getByTestId('form-submit').click();

  await expect(page.getByText(/Thank you for your submission/i)).toBeVisible();
});

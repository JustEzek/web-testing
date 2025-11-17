import { test, expect } from '@playwright/test';

// Feature 2 – Upload
test.skip('Upload a document (BLOCKED – requires logged-in session)', async ({ page }) => {
  // Given I am on the dashboard while logged in
  await page.goto('/app');

  // When I click the Upload button and choose a file
  await page.getByTestId('upload-button').click();
  const fileInput = page.getByTestId('upload-input');
  await fileInput.setInputFiles('tests/fixtures/sample.pdf');

  // Then I should see a success message and the document in the list
  await expect(page.getByText(/Upload successful/i)).toBeVisible();
  await expect(
    page.getByTestId('doc-card').filter({ hasText: 'sample.pdf' })
  ).toBeVisible();
});

// Feature 3 – Download
test.skip('Download a document (BLOCKED – requires logged-in session)', async ({ page }) => {
  // Given I have at least one document in the dashboard
  await page.goto('/app');

  const firstDoc = page.getByTestId('doc-card').first();
  await firstDoc.getByTestId('doc-menu').click();

  // When I click "Download"
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('menuitem', { name: /Download/i }).click(),
  ]);

  // Then a file should be downloaded
  const path = await download.path();
  expect(path).not.toBeNull();
});


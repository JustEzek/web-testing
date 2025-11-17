import { test, expect } from '@playwright/test';

// Feature 7 – Links
test.skip('Links – generate and open a shareable link (BLOCKED)', async ({ page, browser }) => {
  await page.goto('/app');

  // Open a document
  await page.getByTestId('doc-card').first().click();

  // Generate a shareable link
  await page.getByTestId('share-button').click();
  const link = await page.getByTestId('share-link-input').inputValue();

  // Open the link in a fresh context (simulating another user)
  const viewerContext = await browser.newContext();
  const viewerPage = await viewerContext.newPage();

  await viewerPage.goto(link);

  // Expect the document viewer to appear
  await expect(viewerPage.getByTestId('doc-viewer')).toBeVisible();

  await viewerContext.close();
});

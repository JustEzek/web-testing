import { test, expect } from '@playwright/test';

// Feature 13 – Chat History
test.skip('Chat History – view previous chat sessions (BLOCKED)', async ({ page }) => {
  await page.goto('/app/chat');

  // Open chat history pane
  await page.getByTestId('chat-history-open').click();

  // Expect at least one history item
  await expect(page.getByTestId('chat-history-item')).toBeVisible();

  // Open the most recent session
  await page.getByTestId('chat-history-item').first().click();

  await expect(page.getByTestId('chat-message')).toBeVisible();
});

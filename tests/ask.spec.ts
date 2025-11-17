import { test, expect } from '@playwright/test';

// Feature 4 – Ask
test.skip('Ask – get AI answer about a document (BLOCKED – requires logged-in session)', async ({ page }) => {
  await page.goto('/app');

  // Open Ask panel
  await page.getByTestId('ask-panel-open').click();

  // Ask a question
  await page.getByTestId('ask-input').fill('Summarize this document in three bullet points.');
  await page.getByTestId('ask-submit').click();

  // Expect a response area to be populated
  await expect(page.getByTestId('ask-response')).toBeVisible({ timeout: 30000 });
});

// Feature 5 – Chat (ChatGPT search)
test.skip('Chat – send a message and receive AI response (BLOCKED)', async ({ page }) => {
  await page.goto('/app/chat'); // or open chat drawer in /app

  await page.getByTestId('chat-input').fill('Find all documents related to contracts.');
  await page.getByTestId('chat-send').click();

  await expect(page.getByTestId('chat-message-user').last()).toContainText('contracts');
  await expect(page.getByTestId('chat-message-ai').last()).toBeVisible({ timeout: 30000 });
});

// Feature 6 – Reach
test.skip('Reach – search external sources (BLOCKED)', async ({ page }) => {
  await page.goto('/app');

  // Open Reach feature
  await page.getByTestId('reach-open').click();
  await page.getByTestId('reach-search-input').fill('Q4 roadmap');
  await page.getByTestId('reach-search-submit').click();

  // Expect some results showing external sources
  await expect(page.getByTestId('reach-result')).toBeVisible({ timeout: 15000 });
});

import { test, expect } from '@playwright/test';

// Feature 8 – Calendar
test.skip('Calendar – create a review event (BLOCKED)', async ({ page }) => {
  await page.goto('/app/calendar');

  await page.getByTestId('new-event-button').click();
  await page.getByTestId('event-title-input').fill('Review Q4 budget');
  await page.getByTestId('event-date-input').fill('2025-12-01'); // Example date
  await page.getByTestId('event-save').click();

  // Confirm the event appears in the calendar
  await expect(
    page.getByTestId('calendar-event').filter({ hasText: 'Review Q4 budget' })
  ).toBeVisible();
});

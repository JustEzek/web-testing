import { test, expect } from '@playwright/test';

// Feature 16a – Trusted device
test.skip('Settings – enable trusted device (BLOCKED)', async ({ page }) => {
  await page.goto('/app/settings/security');

  await page.getByTestId('trusted-device-toggle').click();
  await expect(page.getByText(/Device marked as trusted/i)).toBeVisible();

  await page.reload();
  await expect(page.getByTestId('trusted-device-toggle')).toBeChecked();
});

// Feature 16b – Display settings
test.skip('Settings – change display theme (BLOCKED)', async ({ page }) => {
  await page.goto('/app/settings/display');

  await page.getByTestId('theme-toggle').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

// Feature 16c – Video meeting
test.skip('Settings – configure video meeting (BLOCKED)', async ({ page }) => {
  await page.goto('/app/settings/video');

  await page.getByTestId('camera-select').selectOption('default-camera');
  await page.getByTestId('mic-select').selectOption('default-microphone');
  await page.getByTestId('video-test-button').click();

  await expect(page.getByTestId('video-preview')).toBeVisible();
});

// Feature 16d – Subscription & Usage
test.skip('Settings – view subscription & usage info (BLOCKED)', async ({ page }) => {
  await page.goto('/app/settings/subscription');

  await expect(page.getByTestId('plan-name')).toBeVisible();
  await expect(page.getByTestId('usage-storage')).toBeVisible();
});

import { test, expect } from '@playwright/test';

// Feature 10 – Profile Update
test.skip('Profile – update profile information (BLOCKED)', async ({ page }) => {
  await page.goto('/app/profile');

  await page.getByTestId('profile-name-input').fill('Ezekwesili Okonkwo');
  await page.getByTestId('profile-save').click();

  await expect(page.getByText(/Profile updated/i)).toBeVisible();

  await page.reload();
  await expect(page.getByTestId('profile-name-input')).toHaveValue('Ezekwesili Okonkwo');
});

// Feature 11 – Analytics
test.skip('Analytics – view usage dashboard (BLOCKED)', async ({ page }) => {
  await page.goto('/app/analytics');

  await expect(page.getByTestId('analytics-chart')).toBeVisible();
  await expect(page.getByTestId('metric-doc-count')).toBeVisible();

  // Apply a filter
  await page.getByTestId('date-filter').selectOption('last-30-days');
  await expect(page.getByTestId('analytics-chart')).toBeVisible();
});

// Feature 12 – Workspace
test.skip('Workspace – create and switch workspace (BLOCKED)', async ({ page }) => {
  await page.goto('/app');

  await page.getByTestId('workspace-switcher').click();
  await page.getByTestId('new-workspace-button').click();
  await page.getByTestId('workspace-name-input').fill('QA Testing Space');
  await page.getByTestId('workspace-save').click();

  await expect(page.getByTestId('workspace-current')).toHaveText('QA Testing Space');
});

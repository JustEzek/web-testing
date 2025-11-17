// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: 'tests',
  use: {
    baseURL: process.env.BASE_URL || 'https://app.grabdocs.com',
    storageState: 'auth/owner.json',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  workers: 1,
  retries: 1,
  projects: [
    { name: 'Chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'Firefox', use: { ...devices['Desktop Firefox'] } },
  ]
});

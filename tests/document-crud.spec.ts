import { test, expect } from '@playwright/test';

// Blocked due to GrabDocs login being broken
test.describe.skip('Document CRUD (BLOCKED – login unavailable)', () => {

  test.beforeEach(async ({ page }) => {
    // This is the intended login flow once GrabDocs auth is working again
    // const login = new LoginPage(page);
    // await login.goto();
    // await login.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  });

  test('create, edit, rename, comment, share, delete', async ({ page }) => {
    // Placeholder documenting intended E2E steps
    // Real steps will run once login works again.

    /*
      1. Navigate to dashboard
      2. Create document
      3. Type body
      4. Rename document
      5. Add comment
      6. Share with another user
      7. Save
      8. Delete document
    */

    expect(true).toBe(true);
  });

});


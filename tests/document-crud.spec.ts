// tests/document-crud.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { DocPage } from './pages/DocPage';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
});

test('create, edit, rename, comment, share, delete', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.assertLoaded();
  await dash.createDoc();

  const doc = new DocPage(page);
  await doc.setTitle('PW Demo Doc');
  await doc.typeBody('Hello from Playwright');
  await doc.rename('PW Demo Doc v2');
  await doc.addComment('Ready for review');
  await doc.share(process.env.SECOND_USER_EMAIL!, 'Viewer');
  await doc.expectSaved();
  await doc.delete();

  await expect(page.getByTestId('toast')).toContainText('moved to trash');
});

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(180000);
  await page.goto('https://yuvipep.com/');
  await page.locator('html').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Products Yuvipep Store' }).click();
  const page1 = await page1Promise;
  expect(page1.url()).toContain('https://yuvipepstore.com/');
});

// @ts-check
const { test, expect } = require('@playwright/test');

test('has correct title', async ({ page }) => {
  test.setTimeout(180000); // 3 minutes total timeout

  await page.goto('https://yuvipep.com/');

  // Expect the title to contain "YuviPep"
  await expect(page).toHaveTitle(/YuviPep/);
});
test('click "Book a Free Class"', async ({ page }) => {
  test.setTimeout(180000); // 3 minutes total timeout

  await page.goto('https://yuvipep.com/');

  // Click the "Book a Free Class" button
  await page.click('text=Book a Free Class');

  // Expect navigation to a booking page or form
  await expect(page).toHaveURL(/.*book-demo-class/);
});
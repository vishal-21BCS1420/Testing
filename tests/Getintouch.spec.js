import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(180000);
  await page.goto('https://yuvipep.com/');
  await page.getByRole('link', { name: 'Get In Touch' }).click();
  await page.getByLabel('Robotics And Innovation Based').click();
  await page.getByLabel('AI and ML Program for').click();
  await page.getByText('Name', { exact: true }).click();
  await page.getByPlaceholder('Enter your name*').click();
  await page.getByPlaceholder('Enter your name*').press('CapsLock');
  await page.getByPlaceholder('Enter your name*').fill('A');
  await page.getByPlaceholder('Enter your name*').press('CapsLock');
  await page.getByPlaceholder('Enter your name*').fill('Abcdef ');
  await page.getByPlaceholder('Enter your name*').press('CapsLock');
  await page.getByPlaceholder('Enter your name*').fill('Abcdef S');
  await page.getByPlaceholder('Enter your name*').press('CapsLock');
  await page.getByPlaceholder('Enter your name*').fill('Abcdef Serty');
  await page.locator('div').filter({ hasText: /^Select your grade\*$/ }).nth(3).click();
  await page.getByRole('option', { name: 'Class 3' }).click();
  await page.locator('div').filter({ hasText: 'Parent\'s Name' }).nth(4).click();
  await page.locator('div').filter({ hasText: 'Parent\'s Name' }).nth(4).click();
  await page.getByPlaceholder('Enter your Parent\'s Name').press('CapsLock');
  await page.getByPlaceholder('Enter your Parent\'s Name').fill('ASDFG ASDFG');
  await page.getByPlaceholder('Enter your Institution/School*').click();
  await page.getByPlaceholder('Enter your Institution/School*').fill('ASDFGHJKL ASDFGHJ');
  await page.locator('div').filter({ hasText: /^Contact$/ }).click();
  await page.getByPlaceholder('Enter your Phone number/Email*').fill('1234567890');
  await page.getByRole('button', { name: 'Close' }).click();
});
import { test, expect } from '@playwright/test';
// Test data for various scenarios
const testData = {
  validData: {
    name: 'Vishal Singh',
    parentName: 'Vijay Singh',
    school: 'Deoghar Public School',
    contact: '6578494363',
    grade: 'Class 3'
  },
  invalidData: {
    shortName: 'Vi',
    longName: 'A'.repeat(101), // Assuming max name length is 100
    specialCharName: 'Vishal@123',
    invalidPhone: '123',
    longPhone: '12345678901234567890',
    specialCharPhone: 'abc-def-ghij'
  }
};
// Helper function to navigate and select initial options
async function navigateAndSelectInitialOptions(page) {
  await page.goto('https://yuvipep.com/');
  await page.getByRole('link', { name: 'Book a Free Class' }).click();
  await page.getByLabel('Robotics And Innovation Based').click();
  await page.getByLabel('AI and ML Program for').click();
}
test('test', async ({ page }) => {
  test.setTimeout(180000); // 3 minutes total timeout
  await page.goto('https://yuvipep.com/');
  await page.getByRole('link', { name: 'Book a Free Class' }).click();
  await page.getByLabel('Robotics And Innovation Based').click();
  await page.getByLabel('AI and ML Program for').click();
  await page.getByPlaceholder('Enter your name*').click();
  await page.getByPlaceholder('Enter your name*').press('CapsLock');
  await page.getByPlaceholder('Enter your name*').fill('Vishal');
  await page.locator('div').filter({ hasText: /^Select your grade\*$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Class 3' }).click();
  await page.getByPlaceholder('Enter your Parent\'s Name').click();
  await page.getByPlaceholder('Enter your Parent\'s Name').fill('vijay singh');
  await page.getByText('Institution').click();
  await page.getByPlaceholder('Enter your Institution/School*').click();
  await page.getByPlaceholder('Enter your Institution/School*').press('CapsLock');
  await page.getByPlaceholder('Enter your Institution/School*').fill('Deoghar public school');
  await page.locator('div').filter({ hasText: /^Contact$/ }).click();
  await page.getByPlaceholder('Enter your Phone number/Email*').fill('6578494363');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page).toHaveURL('https://yuvipep.com/');
});
test('Validate error for missing required fields', async ({ page }) => {
    test.setTimeout(180000);
    await page.goto('https://yuvipep.com/');
    await page.getByRole('link', { name: 'Book a Free Class' }).click();
    await page.getByLabel('Robotics And Innovation Based').click();
    await page.getByLabel('AI and ML Program for').click();
    await page.getByPlaceholder('Enter your name*').fill(''); // Leave name empty
    await page.locator('div').filter({ hasText: /^Select your grade\*$/ }).nth(2).click();
    await page.getByRole('option', { name: 'Class 3' }).click();
    await page.getByPlaceholder("Enter your Parent's Name").fill('Vijay Singh');
    await page.getByPlaceholder('Enter your Institution/School*').fill('Deoghar Public School');
    await page.getByPlaceholder('Enter your Phone number/Email*').fill('6578494363');
    await page.getByRole('button', { name: 'Send' }).click();
    const errorMessage = page.getByText('Please enter your full name');
    await expect(errorMessage).toBeVisible();
  });
  test('Validate error for empty school field', async ({ page }) => {
    test.setTimeout(180000);
    await page.goto('https://yuvipep.com/');
    await page.getByRole('link', { name: 'Book a Free Class' }).click();
    await page.getByLabel('Robotics And Innovation Based').click();
    await page.getByPlaceholder('Enter your name*').fill(testData.validData.name);
    await page.locator('div').filter({ hasText: /^Select your grade\*$/ }).nth(2).click();
    await page.getByRole('option', { name: testData.validData.grade }).click();
    await page.getByPlaceholder('Enter your Parent\'s Name').fill(testData.validData.parentName);
    await page.getByPlaceholder('Enter your Institution/School*').fill('');
    await page.getByPlaceholder('Enter your Phone number/Email*').fill(testData.validData.contact);
    
    await page.getByRole('button', { name: 'Send' }).click();
    const errorMessage = page.getByText('Please enter your institution / school name');
    await expect(errorMessage).toBeVisible();
  });
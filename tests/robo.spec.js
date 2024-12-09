import { test, expect } from '@playwright/test';

test('test case 2', async ({ page }) => {
  test.setTimeout(180000); 
  await page.goto('https://yuvipep.com/');
  await page.getByRole('link', { name: 'Book a Free Class' }).click();
  await page.getByLabel('Robotics And Innovation Based').click();
  await page.getByLabel('AI and ML Program for').click();
  await page.getByPlaceholder('Enter your name*').click();
  await page.getByPlaceholder('Enter your name*').fill('John Doe');
  await page.locator('div').filter({ hasText: /^Select your grade\*$/ }).nth(1).click();
  await page.getByRole('option', { name: 'Class 4' }).click();
  await page.getByPlaceholder('Enter your Parent\'s Name').click();
  await page.getByPlaceholder('Enter your Parent\'s Name').fill('Jane Doe');
  await page.getByPlaceholder('Enter your Institution/School*').click();
  await page.getByPlaceholder('Enter your Institution/School*').fill('Sunny School');
  await page.locator('div').filter({ hasText: /^Contact$/ }).click();
  await page.getByPlaceholder('Enter your Phone number/Email*').fill('1234567890');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page).toHaveURL('https://yuvipep.com/book-demo-class');
});

// import { test, expect } from '@playwright/test';

// test('Book a Free Class', async ({ page, context, browserName }) => {
//   // Extend overall test timeout
//   test.setTimeout(180000); // 3 minutes total timeout

//   try {
//     // Configure context for better network handling
//     await context.setDefaultTimeout(60000);
    
//     // Disable service workers if they're causing issues
//     await context.route('**/*', route => {
//       return route.request().resourceType() === 'serviceworker' 
//         ? route.abort() 
//         : route.continue();
//     });

//     // More aggressive navigation with multiple strategies
//     try {
//       await page.goto('https://yuvipep.com/', { 
//         timeout: 60000,
//         waitUntil: 'domcontentloaded'
//       });
//     } catch (navError) {
//       console.warn('Initial navigation failed, attempting alternative approach');
      
//       // Fallback navigation method
//       await page.evaluate(() => {
//         window.stop();
//         window.location.href = 'https://yuvipep.com/';
//       });
      
//       await page.waitForLoadState('domcontentloaded', { timeout: 30000 });
//     }

//     // Enhanced wait and interaction
//     await page.waitForTimeout(3000); // Static wait for page to stabilize

//     // Robust link clicking with multiple strategies
//     const bookClassLink = await page.getByRole('link', { name: 'Book a Free Class' });
    
//     try {
//       // Try standard click first
//       await bookClassLink.click({ timeout: 10000 });
//     } catch {
//       // Fallback to JavaScript click
//       await page.evaluate((el) => el.click(), bookClassLink);
//     }

//     // Wait for page to load after navigation
//     //await page.waitForLoadState('networkidle', { timeout: 30000 });

//     // Program and form filling
//     await page.getByLabel('Robotics And Innovation Based').click({ timeout: 10000 });
//     await page.getByLabel('AI and ML Program for').click({ timeout: 10000 });

//     // Form filling with error handling
//     await page.getByPlaceholder('Enter your name*').fill('John Doe', { timeout: 5000 });
    
//     // Grade selection
//     await page.locator('div').filter({ hasText: /^Select your grade\*$/ }).nth(1).click({ timeout: 5000 });
//     await page.getByRole('option', { name: 'Class 4' }).click({ timeout: 5000 });

//     // Fill remaining fields
//     await page.getByPlaceholder('Enter your Parent\'s Name').fill('Jane Doe', { timeout: 5000 });
//     await page.getByPlaceholder('Enter your Institution/School*').fill('Sunny School', { timeout: 5000 });
//     await page.getByPlaceholder('Enter your Phone number/Email*').fill('1234567890', { timeout: 5000 });

//     // Submit form
//     await page.getByRole('button', { name: 'Send' }).click({ timeout: 10000 });
//     await expect(page).toHaveURL('https://yuvipep.com/book-demo-class');

//   } catch (error) {
//     // Comprehensive error logging
//     console.error('Test failed:', error);
    
//     // Throw original error to fail the test
//     throw error;
//   }
// });
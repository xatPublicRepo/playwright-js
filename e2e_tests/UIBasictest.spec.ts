import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
  
//     // Click the get started link.
//     await page.getByRole('link', { name: 'Get started' }).click();
  
//     // Expects page to have a heading with the name of Installation.
//     await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('First Playwright test', async ({browser}) => {
    const context = browser.newContext();
    const page = (await context).newPage();
    //can use page fixture too
    (await page).goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test('Another Playwright test', async ({page}) => {
    (await page).goto("https://rahulshettyacademy.com/loginpagePractise/");
});
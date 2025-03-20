import { test, expect, chromium } from '@playwright/test';

let browser;
let context;

test.beforeEach(async () => {
    browser = await chromium.launch({ headless: false }); // Keep browser visible
    context = await browser.newContext();
});

test.afterEach(async () => {
    await browser.close();
});

test('Handle Multiple Pages/windows', async () => {
    const page1 = await context.newPage();
    await page1.goto('https://www.orangehrm.com/');
    await expect(page1).toHaveTitle('Human Resources Management Software | OrangeHRM');

    const pagePromise = context.waitForEvent('page');
    await page1.locator("//a[normalize-space()='OrangeHRM']").click();

    const newPage = await pagePromise;
    await expect(page1).toHaveTitle('Human Resources Management Software | OrangeHRM');

    await page1.waitForTimeout(3000);
    await newPage.waitForTimeout(3000);
});

test('Switching the tab', async () => {
    const page1 = await context.newPage();
    await page1.goto('https://www.orangehrm.com/');
    await expect(page1).toHaveTitle('Human Resources Management Software | OrangeHRM');

    // Wait for new tab to open
    const pagePromise = context.waitForEvent('page');
    await page1.locator("//a[normalize-space()='OrangeHRM']").click();

    const newPage = await pagePromise;
    await newPage.waitForLoadState('domcontentloaded'); // Ensure the new tab is fully loaded

    await expect(newPage).toHaveTitle('Get to Know Us | Innovating HR Solutions | OrangeHRM');

    console.log("Switched to new tab");
    await newPage.bringToFront(); // Ensure new page is active
    await newPage.waitForTimeout(2000);

    console.log("Switching back to the first tab");
    await page1.waitForTimeout(1000); // Small wait before switching back
    await page1.bringToFront(); // Switch back to the first tab
    await page1.waitForTimeout(2000);

});

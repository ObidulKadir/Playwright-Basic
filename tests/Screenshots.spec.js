import { test, expect } from '@playwright/test';

/*
 The screenshot can be generate 
 1. Page screen shot - 
  
    await page.screenshot({ path: 'folderLocation'+filenameformat.png });

2. Full page screenshot 
     await page.screenshot({ path: 'folderLocation'+filenameformat.png },fullPage:true);
3. For specific locator.
    await page.locator('locatorpath').screenshot({ path: 'folderLocation'+filenameformat.png });
4. We can also define automatic screenshot for each test by defining in config file
    use:{
        screenshot: 'on'
    }

5. We can attach each test ss to a report.

    test.info().attach('page screnshot',{
        path: screenshotPath,
        contentType: 'image/png'
    }

*/

// Automatically take a screenshot after each test and attach it
test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== 'passed') { // Capture only on failure
        const screenshot = await page.screenshot();
        testInfo.attach('Failure Screenshot', {
            body: screenshot,
            contentType: 'image/png'
        });
    }
});

test('Page Screenshot', async ({ page }) => {
    await page.goto('https://dotinternetbd.com/');

    const screenshotPath = `tests/screenshots/${Date.now()}_homePage.png`;
    await page.screenshot({ path: screenshotPath });

    // Attach screenshot to the report
    test.info().attach('Page Screenshot', {
        path: screenshotPath,
        contentType: 'image/png'
    });
});

test('Full Page Screenshot', async ({ page }) => {
    await page.goto('https://dotinternetbd.com/');

    const screenshotPath = `tests/screenshots/${Date.now()}_FullPage.png`;
    await page.screenshot({ path: screenshotPath, fullPage: true });

    test.info().attach('Full Page Screenshot', {
        path: screenshotPath,
        contentType: 'image/png'
    });
});

test('Specific Locator Screenshot', async ({ page }) => {
    await page.goto('https://dotinternetbd.com/');

    const locator = page.locator('body > div:nth-child(1) > div:nth-child(2) > main:nth-child(1) > section:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)');
    const screenshotPath = `tests/screenshots/${Date.now()}_specificLocator.png`;

    await locator.screenshot({ path: screenshotPath });

    test.info().attach('Specific Locator Screenshot', {
        path: screenshotPath,
        contentType: 'image/png'
    });
});

test('Navigate and Click', async ({ page }) => {
    await page.goto('https://dotinternetbd.com/');
    await page.locator("//a[normalize-space()='About']").click();

    const screenshotPath = `tests/screenshots/${Date.now()}_afterClick.png`;
    await page.screenshot({ path: screenshotPath });

    test.info().attach('After Click Screenshot', {
        path: screenshotPath,
        contentType: 'image/png'
    });
});

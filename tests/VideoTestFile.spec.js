import { test, expect, chromium } from '@playwright/test';

/*
1. No need to define in playwright.config.ts if you only want video for a specific test.
2. Use newContext({ recordVideo: { dir: 'videos/' } }) inside the test to enable video only for that test.
3. If both config and test-level settings exist, test-level settings take priority./

*/

test('Test with video recording', async () => {
  // Launch a new browser instance
  const browser = await chromium.launch();

  // Create a new browser context with video recording enabled
  const context = await browser.newContext({
    recordVideo: { dir: 'videos/' }, // This enables video recording only for this test
  });

  // Open a new page
  const page = await context.newPage();

  // Navigate to a site
  await page.goto('https://example.com');

  // Perform test actions
  await expect(page).toHaveTitle(/Example/);

  // Close the context to save the video
  await context.close();
  await browser.close();
});

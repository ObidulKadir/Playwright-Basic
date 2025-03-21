import { test, expect } from '@playwright/test';

/*
1. Install Allure plugin
npm install -D @playwright/test allure-playwright

2. setup the configuration file.
    reporter: [
    // ['json', { outputFile: 'my-report2.json'}], ['html', { outputFolder: 'my-report' }],
    // ['junit',{outputFile: 'junits.xml'}],
    ['allure-playwright']
  ],
3. Run the test 
    npx playwright test fileName.spec.js

4. Generate allure report
    npx allure generate allure-results --clean
    
5. if (npx allure) does not work.
    npm install -g allure-commandline  (Install allure CLI)

6. Then, repeat 5 
    allure generate allure-results --clean
7. Open in browser
    allure open or npx allure open

*/

test('Verify Google title', async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
});

test('Verify YouTube title', async ({ page }) => {
    await page.goto('https://www.youtube.com');
    await expect(page).toHaveTitle(/YoTube/);
});

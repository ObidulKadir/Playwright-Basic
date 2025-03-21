import { test, expect } from '@playwright/test';

/*
1. Command Line report
    HTML Report-----	npx playwright test --reporter=html
    JSON Report	----    npx playwright test --reporter=json
    JUnit Report ---	npx playwright test --reporter=junit
    Allure Report---    npx playwright test --reporter=allure
    List Report	----    npx playwright test --reporter=list
    Multiple Report---- npx playwright test --reporter=html,junit

Note: In Playwright, list and dot reporters help in generating simplified test execution summaries. However, they do not generate files by default. Below is how they work and how you can save the output to a file.
but generate in report in text file.

npx playwright test --reporter=dot > dot-report.txt
npx playwright test --reporter=list,dot > combined-report.txt


2.Instead of passing reporters via command line, configure them in playwright.config.ts:
    import { defineConfig } from '@playwright/test';

        export default defineConfig({
        reporter: [
            ['html', { outputFolder: 'playwright-html-report' }],
            ['json', { outputFile: 'playwright-report.json' }],
            ['junit', { outputFile: 'results.xml' }]
        ],
        });


Copy code

*/

test('Verify Google title', async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
});

test('Verify YouTube title', async ({ page }) => {
    await page.goto('https://www.youtube.com');
    await expect(page).toHaveTitle(/YuTube/);
});

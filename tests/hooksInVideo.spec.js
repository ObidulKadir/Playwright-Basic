import { test, expect, chromium } from '@playwright/test';

/*
1. Global Setup in Hooks: Using beforeAll ensures that the browser and context are set up once and shared for all tests in the block.
2. Video Recording: The recordVideo option in the context will apply to all pages created within the context.
3. Teardown: Always close the context (and browser if necessary) after tests to ensure videos are saved properly.

Note: open a new page within the context.
    const page = await context.newPage(); // Open a new page within the context

    you can inject the playwright in the test block, but for that test there are no new browser will open and new video will record

*/

let browser
let context

test.describe('Video Recording Tests', () => {

    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false,
            slowMo: 1000
        });
        context = await browser.newContext({
            recordVideo: {
                dir: 'VideosHooks2/'
            }
        })
    })
    test.afterAll(async () => {
        await context.close()
        await browser.close()
    })
    test('Text Assertion', async ({ }) => {
        const page = await context.newPage()
        await page.goto('https://www.saucedemo.com/v1/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.getByRole('button', { name: 'LOGIN' }).click();
        await expect(page.getByText('Products')).toHaveText('Products'); //text assertion
        await expect(page.getByText('Products')).toBeVisible()
        await expect(page.getByText('Products')).toBeEnabled()
        await expect(page.getByText('Products')).toHaveCount(1);
        await expect(page.getByText('Products')).toHaveText('Products'); //text assertion
    });

    test('Soft Assertion', async ({ }) => {
        const page = await context.newPage();
        await page.goto('https://www.saucedemo.com/v1/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.getByRole('button', { name: 'LOGIN' }).click();
        await expect.soft(page.getByText('Products')).toHaveText('Products'); //Soft assertion
        await expect(page.getByText('Products')).toHaveText('Products');
    });

    test('Title Assertion', async ({ }) => {
        const page = await context.newPage();
        await page.goto('https://www.saucedemo.com/v1/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.getByRole('button', { name: 'LOGIN' }).click();
        await expect(page).toHaveTitle('Swag Labs');
        await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
    });

})
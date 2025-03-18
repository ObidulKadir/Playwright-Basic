import { test, expect, chromium } from '@playwright/test';
/*
    1. When config the playwright.config.js file
        a. const config = {
                            use: {
                            video: 'on',
                            launchOptions:{
                                slowMo: 1000
                            }
        b. npx playwright test Video.spec.js --project chromium --headed run on terminal, the video will execute in the test results
        

*/
test('Video 1', async ({ page }) => {


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


    // await context.close()
});

test('Video 3', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await expect.soft(page.getByText('Products')).toHaveText('Products'); //text assertion
});

test('Video 2', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');

});
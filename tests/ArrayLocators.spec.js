import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();

    const productNames = await page.locator(".inventory_item_name").allTextContents()
    console.log(productNames)

    const targetProduct = ['Sauce Labs Onesie', 'Sauce Labs Backpack'];

    //const index = productName.indexOf('Sauce Labs Backpack')

    for (const productName of targetProduct) {
        const index = productNames.indexOf(productName)

        if (index != -1) {
            await page.locator('.inventory_item_name').nth(index).click()
            await page.getByRole('button', { name: 'ADD TO CART' }).click();
            // await page.waitForLoadState(3000)
            await page.goBack()
        }
    }
});
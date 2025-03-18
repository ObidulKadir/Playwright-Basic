import { test, expect } from '@playwright/test';
/*
1. Using expect() (Playwright Test)
    toHaveText(), toBeVisible(), toHaveAttribute(), toHaveValue(), toHaveURL(), toHaveTitle()

2. Using JavaScript if Conditions
        Custom validation using if-else and throwing errors.

3. Using Node.js assert Library
    assert.strictEqual(), assert.ok() for validations.

4. Using Chai Assertions (for Mocha/Jest users)
    expect(value).to.equal(expectedValue).

5. Using Soft Assertions (expect.soft())
    Allows multiple assertions to run without stopping execution.

6. Using assertSnapshot() for Visual Testing
    expect(page).toHaveScreenshot().

7. Using Assertions in API Testing
    expect(response).toBeOK() to validate API responses.
*/

test('Text Assertion', async ({ page }) => {
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
});

test('Soft Assertion', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await expect.soft(page.getByText('Products')).toHaveText('Products'); //text assertion
});

test('Title Assertion', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
    
});

test('JS (Custom Assertion) Assertion', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    const text = await page.locator('.product_label').textContent();
    if (text == 'Products') {
        console.log("Using JavaScript if Conditions (Custom Assertions)")
    }
});
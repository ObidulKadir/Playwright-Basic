import { test, expect } from '@playwright/test';
/*
    1. Hard Assertion
        a. It will terminate the execution when the fails found.
        b. It will not execute the next line of code after getting the fail
        c. It will execute the another test block. 

    2. Soft Assertion
        a. It will execute whole test block code after getting the fails.
        b. it will execute another test block if soft assertion test block failed
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
  await expect(page.getByText('Produc3ts')).toHaveCount(1);
  await expect(page.getByText('Products')).toHaveText('Products'); //text assertion
});

test('Soft Assertion', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await expect.soft(page.getByText('Prodducts')).toHaveText('Products'); //Soft assertion
    await expect(page.getByText('Products')).toHaveText('Products');
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
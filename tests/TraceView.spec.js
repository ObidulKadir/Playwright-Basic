const { test, expect } = require('@playwright/test')

/*
    Without creating the zip file, when retries =1 and trace = 'on-first-retry' has been selected from the config file
    On the report the trace file will be generated.

    'on-first-retry'  - Record a trace only when retrying a test for the first time.
    'off'       - Do not record a trace.
    'on'       - Record a trace for each test. (not recommended as it's performance heavy)
    'retain-on-failure' - Record a trace for each test, but remove it from successful test runs

Note: When running the above command, there is no need to set `retries=1` as it is applied by default, and a trace file will be generated.  
However, if `trace=on` is not used in the command, it must be declared in the configuration file.

*/
test('Trace View with retain', async ({ context, page }) => {

    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Loout' }).click();
});

test('Trace View', async ({ context, page }) => {

    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
});


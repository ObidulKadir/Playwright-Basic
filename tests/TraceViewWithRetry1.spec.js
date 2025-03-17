const { test, expect } = require('@playwright/test')

/*

*/
test('Trace View', async ({ context, page }) => {

    await context.tracing.stop()
    await context.tracing.start({
        screenshots:true,
        snapshots: true
    })
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Loout' }).click();

    await context.tracing.stop({
        path:'traceView1.zip'
    })
});


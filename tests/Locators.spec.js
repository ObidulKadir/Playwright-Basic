const { test, expect } = require('@playwright/test')

/*
1. Using any object property or attribute
    a. await page.click('id=user-name')
    b. await page.locator('id=user-name')
    C. page.locator('[data-testid="submit-button"]');
2. Using css selector
    a. await page.locator('#user-name')
3. Using Xpath
    a. await page.locator('xpath=//input[@name='login-button'])
    b. await page.locator('//input[@name='login-button'])
4. Using Text
    a. await page.locator('text=LOGIN')
    b. await page.locator('input:has-text("LOGIN"))

5. Locating by Role
    a. page.getByRole('button', { name: 'Submit' })
*/
test('Locators', async ({ page }) => {

    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.locator('[id="login_field"]')
    await page.locator('name=password')
    await page.locator("xpath=//input[@type='submit']").click()
});


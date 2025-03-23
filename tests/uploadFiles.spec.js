import { test, expect } from '@playwright/test'

test.skip('Single file', async ({ page }) => {
    await page.goto('https://demoqa.com/upload-download');
    await page.locator('id=uploadFile').setInputFiles('tests/uploadFiles/testFile1.pdf');
    await page.waitForTimeout(5000)

    await expect(page.locator('id=uploadedFilePath')).toContainText('testFile1.pdf');
})

test('Multiple files', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.waitForSelector('id=filesToUpload')
    await page.locator('id=filesToUpload').setInputFiles(
        ['tests/uploadFiles/testFile1.pdf', 'tests/screenshots/1742708143962_afterClick.png']
    );
    await page.waitForTimeout(5000)

    const uploadedFileList = await page.locator("ul[id='fileList'] li").allTextContents();

    // Check if expected files exist in the list
    expect(uploadedFileList).toContain('testFile1.pdf');
    expect(uploadedFileList).toContain('1742708143962_afterClick.png');

    const screenshotPath = 'tests/screenshots/'+Date.now()+'afterUploadFiles.png'
    await page.screenshot({path:screenshotPath})

    test.info().attach('Multiple files input',{
        path:screenshotPath, //location of file or ss
        contentType: 'image/png'
    })
})
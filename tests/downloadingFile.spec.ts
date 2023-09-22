import { test } from '@playwright/test';

test('Downalod a file', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/FileDownload.html#google_vignette');
  await page.locator('#textbox').click();
  await page.locator('#textbox').pressSequentially('Playwright Udemy Course');
  await page.locator('#createTxt').click();

  const download = await Promise.all([
    page.waitForEvent('download'),
    page.locator('#link-to-download').click()
  ])

  const path = await download[0].path();
  console.log("Downloaded Pat ... "+path);

  // Way 1 - Using default file name
  // const fileName = download[0].suggestedFilename();
  // await download[0].saveAs(fileName);

  // Way 2 - Customised file name
  const customisedFileName = "Playwright_Downloaded_File";
  await download[0].saveAs(customisedFileName);
});
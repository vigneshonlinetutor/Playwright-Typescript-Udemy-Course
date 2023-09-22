import { test, expect } from '@playwright/test';

test('Frame Handling Using Page.Frame()', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');

  // To Find total number of Frames
  const allFrames = page.frames();
  const allFramesCount = allFrames.length;
  console.log('Total Frames Count is ' + allFramesCount);
  const frame1 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
  await frame1?.locator('input[name="mytext1"]').fill('Playwright');

  await page.waitForTimeout(5000);
  await page.close();
})

test('Frame Handling Using Page.FrameLocator()', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  const frame1 = page.frameLocator('frame[src="frame_1.html"]');
  await frame1?.locator('input[name="mytext1"]').fill('Playwright');
  await page.waitForTimeout(5000);
  await page.close();
})

test('Nested Frame Handling', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  
  const frame3 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});

  const childFrames = frame3?.childFrames();
  console.log("Number of Child Frames "+childFrames?.length);

  await childFrames[0].locator('//*[@id="i8"]/div[3]/div').check({force:true});
  await childFrames[0].locator('//*[@id="i19"]/div[3]').check({force:true});

  await page.waitForTimeout(5000);
  await page.close();
})
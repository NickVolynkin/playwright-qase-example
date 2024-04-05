// tests/google.test.js
import {expect, test} from "@playwright/test";
import {qase} from 'playwright-qase-reporter/playwright';
// import {qase} from 'playwright-qase-reporter/dist/playwright';

// const {test, expect} = require('@playwright/test');

test.describe("Example tests", async () => {
  test(qase('1', 'Google homepage has the correct title'), async ({page}) => {
  // test( 'Google homepage has the correct title', async ({page}) => {
  //   qase.id(1)
  //   qase.fields(
  //     {
  //       severity: 'high',
  //       priority: 'medium'
  //     }
  //   )
    await page.goto('https://google.com');
    await expect(page).toHaveTitle(/Google/);
  });
})

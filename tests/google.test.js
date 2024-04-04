// tests/google.test.js

import {qase} from 'playwright-qase-reporter/dist/playwright';

const { test, expect } = require('@playwright/test');

test.describe("Example tests", async () => {
  test(qase('1', 'Google homepage has the correct title'), async ({ page }) => {
    await page.goto('https://google.com');
    await expect(page).toHaveTitle(/Google/);
  });
})


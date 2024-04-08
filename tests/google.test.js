// tests/google.test.js
import {expect, test} from "@playwright/test";
import {qase} from 'playwright-qase-reporter';

test.describe("Example tests", async () => {
  test('Google homepage has the correct title', async ({page}) => {
    qase.id(1)
    qase.title('Google homepage has the correct title')
    qase.fields(
      {
        severity: 'high',
        priority: 'medium'
      }
    )
    await page.goto('https://google.com');
    await expect(page).toHaveTitle(/Google/);
  });


  test(qase(2, 'Google homepage — with stfeps'), async ({page}) => {
    await test.step('Step 1', async () => {
      await page.goto('https://google.com');
    });
    await test.step('Step 2', async () => {
      await expect(page).toHaveTitle(/Google/);
    });
  });

  // const people = ['Alice', 'Bob'];
  // for (const name of people) {
  //   test(`testing with ${name}`, async () => {
  //     qase.id(3)
  //     qase.parameters({'person': name})
  //   });
  // }

})

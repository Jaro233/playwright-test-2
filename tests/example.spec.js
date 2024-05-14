// @ts-check
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('link', { name: 'English 6,796,000+ articles' }).click();
  await page.getByText('Mars', { exact: true }).click();
  await page.getByText('Mars is the fourth planet').click();
  await page.getByText('Mars was formed approximately').click();
  await page.getByRole('link', { name: 'Late Heavy Bombardment', exact: true }).click();
  await page.screenshot({path: `wiki_screen.png`});
});
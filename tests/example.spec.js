// @ts-check
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('link', { name: 'English 6,796,000+ articles' }).click();
  await page.getByRole('link', { name: 'Frank Bainimarama' }).click();
  await page.getByText('Fiji coup of 2000', { exact: true }).click();
  await page.getByText('Post-2000 coup', { exact: true }).click();
  await page.getByRole('link', { name: '2006 Fijian coup d\'état' }).click();
  await page.getByRole('heading', { name: 'Fijian coup d\'état' }).locator('span').click();
  await page.screenshot({path: `wiki_screen.png`});
});

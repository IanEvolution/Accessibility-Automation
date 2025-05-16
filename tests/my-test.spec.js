import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('link', { name: 'English 6,974,000+ articles' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('alan turing');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  const firstParagraph = await page.locator('body').first();
  await expect(firstParagraph).toContainText('mathematician');
  // Highlight "mathematician" on the page
  await page.evaluate(() => {
    const markText = (node, text) => {
      if (node.nodeType === 3) { // Text node
        const idx = node.nodeValue.toLowerCase().indexOf('mathematician');
        if (idx !== -1) {
          const span = document.createElement('mark');
          span.textContent = node.nodeValue.substr(idx, 'mathematician'.length);
          const after = node.splitText(idx);
          after.nodeValue = after.nodeValue.substr('mathematician'.length);
          node.parentNode.insertBefore(span, after);
        }
      } else if (node.nodeType === 1 && node.childNodes) {
        node.childNodes.forEach(child => markText(child, text));
      }
    };
    markText(document.body, 'mathematician');
  });
  await page.screenshot({ path: 'alan turing.png' });
});

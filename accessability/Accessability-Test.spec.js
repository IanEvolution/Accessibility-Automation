// Uses Axe-core for accessibility testing
import { test, expect } from '@playwright/test';
import fs from 'fs';
import axe from 'axe-core';

const urls = fs.readFileSync('accessability/urls.txt', 'utf-8')
  .split('\n')
  .map(line => line.trim())
  .filter(line => line && !line.startsWith('#'));

test.describe('Accessibility checks', () => {
  let allViolations = [];

  for (const url of urls) {
    test(`Accessibility check for ${url}`, async ({ page }) => {
      await page.goto(url);
      await page.addScriptTag({ path: require.resolve('axe-core') });
      const results = await page.evaluate(async () => await window.axe.run());
      // Save report
      const reportPath = `accessability/reports/${encodeURIComponent(url)}.json`;
      fs.mkdirSync('accessability/reports', { recursive: true });
      fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
      // Log violations
      console.log(`\nAccessibility Violations for ${url}:`, results.violations.length);
      results.violations.forEach(v => {
        console.log(`- [${v.id}] ${v.help}: ${v.nodes.length} occurrence(s)`);
      });
      allViolations.push(...results.violations.map(v => v.id));
      expect(results.violations.length).toBe(0);
    });
  }

  test.afterAll(async () => {
    // Output summary of most common issues
    const summary = {};
    allViolations.forEach(id => { summary[id] = (summary[id] || 0) + 1; });
    console.log('\n=== Accessibility Issue Summary Across All URLs ===');
    Object.entries(summary)
      .sort((a, b) => b[1] - a[1])
      .forEach(([id, count]) => {
        console.log(`${id}: ${count} occurrence(s)`);
      });
  });
});
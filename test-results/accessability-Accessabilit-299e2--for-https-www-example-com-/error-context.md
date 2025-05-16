# Test info

- Name: Accessibility checks >> Accessibility check for https://www.example.com/
- Location: C:\Users\ianho\OneDrive\Desktop\playwright-test\accessability\Accessability-Test.spec.js:14:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 3
    at C:\Users\ianho\OneDrive\Desktop\playwright-test\accessability\Accessability-Test.spec.js:28:41
```

# Page snapshot

```yaml
- heading "Example Domain" [level=1]
- paragraph: This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission.
- paragraph:
  - link "More information...":
    - /url: https://www.iana.org/domains/example
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import fs from 'fs';
   3 | import axe from 'axe-core';
   4 |
   5 | const urls = fs.readFileSync('accessability/urls.txt', 'utf-8')
   6 |   .split('\n')
   7 |   .map(line => line.trim())
   8 |   .filter(line => line && !line.startsWith('#'));
   9 |
  10 | test.describe('Accessibility checks', () => {
  11 |   let allViolations = [];
  12 |
  13 |   for (const url of urls) {
  14 |     test(`Accessibility check for ${url}`, async ({ page }) => {
  15 |       await page.goto(url);
  16 |       await page.addScriptTag({ path: require.resolve('axe-core') });
  17 |       const results = await page.evaluate(async () => await window.axe.run());
  18 |       // Save report
  19 |       const reportPath = `accessability/reports/${encodeURIComponent(url)}.json`;
  20 |       fs.mkdirSync('accessability/reports', { recursive: true });
  21 |       fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  22 |       // Log violations
  23 |       console.log(`\nAccessibility Violations for ${url}:`, results.violations.length);
  24 |       results.violations.forEach(v => {
  25 |         console.log(`- [${v.id}] ${v.help}: ${v.nodes.length} occurrence(s)`);
  26 |       });
  27 |       allViolations.push(...results.violations.map(v => v.id));
> 28 |       expect(results.violations.length).toBe(0);
     |                                         ^ Error: expect(received).toBe(expected) // Object.is equality
  29 |     });
  30 |   }
  31 |
  32 |   test.afterAll(async () => {
  33 |     // Output summary of most common issues
  34 |     const summary = {};
  35 |     allViolations.forEach(id => { summary[id] = (summary[id] || 0) + 1; });
  36 |     console.log('\n=== Accessibility Issue Summary Across All URLs ===');
  37 |     Object.entries(summary)
  38 |       .sort((a, b) => b[1] - a[1])
  39 |       .forEach(([id, count]) => {
  40 |         console.log(`${id}: ${count} occurrence(s)`);
  41 |       });
  42 |   });
  43 | });
```
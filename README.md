# Accessibility Automation with Playwright & axe-core

This project provides an automated way to scan multiple websites for accessibility issues using [Playwright](https://playwright.dev/) and [axe-core](https://www.deque.com/axe/). It is designed for developers, testers, and accessibility advocates who want to quickly identify and report accessibility violations across any number of URLs.

---

## What does it do?

- **Automates browser navigation** to each URL listed in `accessability/urls.txt`
- **Injects axe-core** into each page to run accessibility checks based on WCAG and Section 508 standards
- **Generates a detailed JSON report** for each site in `accessability/reports/`
- **Prints a summary** of the most common accessibility issues found across all tested URLs
- **Fails the test** if any accessibility violations are detected (great for CI/CD pipelines)

---

## How does it work?

1. **List URLs:**  
   Add one URL per line in `accessability/urls.txt`.

2. **Run the test:**  
   ```sh
   npx playwright test accessability/Accessability-Test.spec.js
   ```

3. **View results:**  
   - Individual reports are saved as JSON in `accessability/reports/`
   - The terminal displays a summary of violations for each URL and a cross-site summary

---

## Example Output

```
Accessibility Violations for https://www.example.com/: 3
- [html-has-lang] <html> element must have a lang attribute: 1 occurrence(s)
- [landmark-one-main] Document should have one main landmark: 1 occurrence(s)
- [region] All page content should be contained by landmarks: 1 occurrence(s)

=== Accessibility Issue Summary Across All URLs ===
html-has-lang: 1 occurrence(s)
landmark-one-main: 1 occurrence(s)
region: 2 occurrence(s)
```

---

## Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **(Optional) Install Playwright browsers:**
   ```sh
   npx playwright install
   ```

---

## Customization

- **Add or remove URLs** in `accessability/urls.txt` as needed.
- **Reports** are saved in `accessability/reports/` (ignored by git).
- **Adjust test strictness** by editing the assertion in `Accessability-Test.spec.js`.

---

## Why use this?

- **Catch accessibility issues early** in development or CI/CD
- **Automate repetitive manual checks**
- **Generate actionable reports** for your team or clients

---

## License

MIT

---

*Created by [Your Name](https://github.com/IanEvolution)*

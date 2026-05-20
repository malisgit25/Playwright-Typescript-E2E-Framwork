# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTest.spec.ts >> Enterprise Login Suite >> Login zaliva2010@hotmail.com
- Location: tests\LoginTest.spec.ts:14:9

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('//a[contains(@href,\'/careers/job\') and contains(@href,\'engineer\')]') to be visible
    - waiting for" https://www.gdit.com/careers/?search=Test+Engineer&submit=" navigation to finish...
    - navigated to "https://www.gdit.com/careers/?search=Test+Engineer&submit="

```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  | 
  5  |   constructor(protected page: Page) {}
  6  | 
  7  |   async click(locator: Locator) {
  8  |     await locator.click();
  9  |   }
  10 | 
  11 |   async fill(locator: Locator, value: string) {
  12 |     await locator.fill(value);
  13 |   }
  14 | 
  15 |   async type(locator: Locator, value: string) {
  16 |     await locator.pressSequentially(value);
  17 |   }
  18 | 
  19 |   async waitForVisible(locator: Locator) {
> 20 |     await locator.waitFor({ state: 'visible' });
     |                   ^ Error: locator.waitFor: Target page, context or browser has been closed
  21 |   }
  22 | 
  23 |   async getTitle() {
  24 |     return await this.page.title();
  25 |   }
  26 | }
```
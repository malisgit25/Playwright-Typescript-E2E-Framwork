# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTest.spec.ts >> Enterprise Login Suite >> Login flow zaliva2010@hotmail.com
- Location: tests\LoginTest.spec.ts:14:9

# Error details

```
Error: page.goto: net::ERR_HTTP_RESPONSE_CODE_FAILURE at https://gdit.wd5.myworkdayjobs.com/
Call log:
  - navigating to "https://gdit.wd5.myworkdayjobs.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This page isn’t working" [level=1] [ref=e7]
    - paragraph [ref=e8]: If the problem continues, contact the site owner.
    - generic [ref=e9]: HTTP ERROR 406
  - button "Reload" [ref=e12] [cursor=pointer]
```

# Test source

```ts
  1  | import { test as base, expect } from '@playwright/test';
  2  | import { logger } from '../utils/logger';
  3  | 
  4  | export const test = base.extend({
  5  | 
  6  |   page: async ({ page, baseURL }, use, testInfo) => {
  7  | 
  8  |     const logs: string[] = [];
  9  | 
  10 |     // Browser console logs
  11 |     page.on('console', msg => {
  12 |       logs.push(`[${msg.type()}] ${msg.text()}`);
  13 |     });
  14 | 
  15 |     // Page errors
  16 |     page.on('pageerror', error => {
  17 |       logs.push(`[PAGE ERROR] ${error.message}`);
  18 |     });
  19 | 
  20 |     logger.info('Launching application');
  21 | 
  22 |     // Open application automatically
> 23 |     await page.goto(baseURL!);
     |                ^ Error: page.goto: net::ERR_HTTP_RESPONSE_CODE_FAILURE at https://gdit.wd5.myworkdayjobs.com/
  24 | 
  25 |     // Use page in test
  26 |     await use(page);
  27 | 
  28 |     // Attach logs to report
  29 |     await testInfo.attach(
  30 |       'Execution Logs',
  31 |       {
  32 |         body: JSON.stringify(logs, null, 2),
  33 |         contentType: 'application/json'
  34 |       }
  35 |     );
  36 |   }
  37 | });
  38 | 
  39 | export { expect };
```
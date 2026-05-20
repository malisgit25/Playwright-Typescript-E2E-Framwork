# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTest.spec.ts >> Enterprise Login Suite >> Login zaliva2010@hotmail.com
- Location: tests\LoginTest.spec.ts:14:9

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Password') to be visible

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - link "Skip to main content" [ref=e3] [cursor=pointer]:
      - /url: ""
    - banner [ref=e6]:
      - generic [ref=e8]:
        - link "careers home" [ref=e11] [cursor=pointer]:
          - /url: https://www.gdit.com/careers/
          - img "careers home" [ref=e12]
        - generic [ref=e13]:
          - heading [level=1]
        - navigation [ref=e16]:
          - button "Search and Apply" [ref=e17] [cursor=pointer]
          - button "Join our Talent Community!" [ref=e18] [cursor=pointer]
  - generic:
    - img
  - generic [ref=e21]:
    - main [ref=e22]:
      - generic [ref=e29]:
        - generic [ref=e32]:
          - generic [ref=e35]:
            - heading "Sign In" [level=3] [ref=e36]
            - generic [ref=e37]:
              - generic [ref=e38]:
                - generic [ref=e40]: Email Address*
                - textbox "Email Address" [active] [ref=e43]: zaliva2010@hotmail.com
              - generic [ref=e45]:
                - generic [ref=e47]: Password*
                - textbox "Password" [ref=e50]
              - generic [ref=e55]:
                - button "Sign In" [ref=e56] [cursor=pointer]
                - button [ref=e57] [cursor=pointer]: Sign In
            - generic [ref=e58]:
              - text: Don't have an account yet?
              - button "Create Account" [ref=e59] [cursor=pointer]
            - button "Forgot your password?" [ref=e61] [cursor=pointer]
          - generic:
            - generic:
              - generic [ref=e62]: Enter website. This input is for robots only, do not enter if you're human.
              - textbox "Enter website. This input is for robots only, do not enter if you're human." [ref=e63]
        - generic [ref=e65]:
          - generic [ref=e66]: Follow Us
          - list [ref=e68]:
            - listitem [ref=e69]:
              - button "YouTube" [ref=e70] [cursor=pointer]
            - listitem [ref=e76]:
              - button "X" [ref=e77] [cursor=pointer]
            - listitem [ref=e81]:
              - button "Facebook" [ref=e82] [cursor=pointer]
            - listitem [ref=e86]:
              - button "LinkedIn" [ref=e87] [cursor=pointer]
          - 'list "{0} items are selected" [ref=e93]':
            - option "GDIT Privacy Notice and California Privacy Notice" [ref=e94]:
              - generic [ref=e96]:
                - link "GDIT Privacy Notice and California Privacy Notice opens new window" [ref=e97] [cursor=pointer]: GDIT Privacy Notice and California Privacy Notice
                - link "GDIT Privacy Notice and California Privacy Notice opens new window" [ref=e98] [cursor=pointer]
    - contentinfo [ref=e102]:
      - generic "© 2026 Workday, Inc. All rights reserved." [ref=e104]
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  |   constructor(protected page: Page) {}
  5  | 
  6  |   get(locator: string): Locator {
  7  |     return this.page.locator(locator);
  8  |   }
  9  | 
  10 |   async click(locator: Locator) {
  11 |     await locator.waitFor({ state: 'visible' });
  12 |     await locator.click();
  13 |   }
  14 | 
  15 |   async fill(locator: Locator, value: string) {
> 16 |     await locator.waitFor({ state: 'visible' });
     |                   ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  17 |     await locator.fill(value);
  18 |   }
  19 | 
  20 |   async getTitle() {
  21 |     return this.page.title();
  22 |   }
  23 | }
```
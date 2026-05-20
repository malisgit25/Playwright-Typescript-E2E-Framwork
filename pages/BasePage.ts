import { Page, Locator } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  get(locator: string): Locator {
    return this.page.locator(locator);
  }

  async waitForVisible(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
  }

 async click(locator: Locator) {
  await locator.first().scrollIntoViewIfNeeded();
  await locator.first().waitFor({ state: 'visible' });
  await locator.first().click();
}

 async fill(locator: Locator, value: string) {
  await locator.waitFor({ state: 'attached' });
  await locator.scrollIntoViewIfNeeded();
  await locator.click(); // force focus
  await locator.fill(value);
}

  async getTitle() {
    return this.page.title();
  }
}
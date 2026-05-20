import { test as base, expect } from '@playwright/test';
import { logger } from '../utils/logger';

export const test = base.extend({

  page: async ({ page, baseURL }, use, testInfo) => {

    const logs: string[] = [];

    // Browser console logs
    page.on('console', msg => {
      logs.push(`[${msg.type()}] ${msg.text()}`);
    });

    // Page errors
    page.on('pageerror', error => {
      logs.push(`[PAGE ERROR] ${error.message}`);
    });

    logger.info('Launching application');

    // Open application automatically
    await page.goto(baseURL!, {
      waitUntil: 'domcontentloaded'
    });

    // Use page in test
    await use(page);

    // Attach logs to report
    await testInfo.attach(
      'Execution Logs',
      {
        body: JSON.stringify(logs, null, 2),
        contentType: 'application/json'
      }
    );
  }
});

export { expect };
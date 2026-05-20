import { defineConfig, devices } from '@playwright/test';
import env from './config/env.json';

export default defineConfig({

  testDir: './tests',

  fullyParallel: true,

  retries: 2,

  workers: 2,

  timeout: 90000,

  reporter: [
    ['html'],
    ['list'],
    ['junit', { outputFile: 'reports/results.xml' }],
    ['allure-playwright']
  ],

  use: {

    baseURL: env.url,

    headless: env.headless,
    viewport: null,
    launchOptions: {args: ['--start-maximized']},
    screenshot: 'only-on-failure',

    trace: 'retain-on-failure',

    video: 'retain-on-failure',

    actionTimeout: 15000,

    navigationTimeout: 30000
  },

  projects: [

    {
      name: 'chrome',

      use: {
        browserName: 'chromium',
        channel: 'chrome',
        viewport: null,
        launchOptions: {args: ['--start-maximized']
      }
      }
    },

    {
      name: 'edge',

      use: {
        browserName: 'chromium',
        channel: 'msedge',
        viewport: null,
        launchOptions: {
        args: ['--start-maximized']
      }

      }
    }
  ]
});
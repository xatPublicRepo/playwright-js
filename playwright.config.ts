import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e_tests',
  timeout: 30 * 1000,
  reporter: 'html',

  expect: {
    timeout: 5000
  },

  use: {
    browserName: 'chromium'
  },

});

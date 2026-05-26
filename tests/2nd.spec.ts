import { test, expect } from '@playwright/test';

test('Login page title test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle(/Swag Labs/);
  await page.waitForTimeout(5000);
});
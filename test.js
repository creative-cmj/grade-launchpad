const { test, expect } = require('C:/Users/Caleb Johnson/Downloads/HazeSeasValueList/node_modules/@playwright/test');

test('daily study app renders a 30-day plan and saves a completed lesson', async ({ page }) => {
  await page.goto('http://127.0.0.1:8794/');
  await expect(page.getByText('30-Day Grade Launchpad')).toBeVisible();
  await expect(page.locator('[data-day]')).toHaveCount(30);
  await page.locator('[data-day="1"]').click();
  await expect(page.getByText('Check your understanding')).toBeVisible();
  await page.getByRole('button', { name: 'Check answer' }).click();
  await page.getByRole('button', { name: 'Mark lesson complete' }).click();
  await expect(page.getByText('Completed')).toBeVisible();
  await page.reload();
  await expect(page.getByText('Completed')).toBeVisible();
});

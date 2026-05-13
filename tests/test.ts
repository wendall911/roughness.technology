import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
});

test('home page renders portfolio previews', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Projects Portfolio' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Educational Game Software' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'View project details' }).first()).toBeVisible();
});

test('portfolio index route redirects to home previews', async ({ page }) => {
    await page.goto('/portfolio/');
    await expect(page).toHaveURL(/\/#portfolio$/);
    await expect(page.getByRole('heading', { name: 'Projects Portfolio' })).toBeVisible();
});

test('portfolio detail page renders a project', async ({ page }) => {
    await page.goto('/portfolio/educational-game-software/');
    await expect(page.getByRole('heading', { name: 'Educational Game Software' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Back to portfolio' })).toBeVisible();
});

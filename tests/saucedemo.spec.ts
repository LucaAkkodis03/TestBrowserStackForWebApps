import { test, expect } from "@playwright/test";


test("test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/"); //Obbligatorio.
  // await page.locator('[class="login_logo"]').locator(">*");
  expect(page).toHaveTitle("Swag Labs");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.getByRole("button", { name: "Open Menu" }).click();

  //const figli = await page.locator('[data-test="login-credential"]').locator('> *');
});

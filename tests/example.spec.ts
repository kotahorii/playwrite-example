import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://github.com/");
  await page.getByRole("button", { name: "Search or jump to..." }).click();
  await page.getByRole("combobox", { name: "Search" }).fill("Go");
  await page.getByRole("combobox", { name: "Search" }).press("Enter");
  await page
    .getByTestId("results-list")
    .getByRole("link", { name: "golang/go" })
    .click();
  const text = await page.getByText("Public");
  expect(text).toBeTruthy();
});

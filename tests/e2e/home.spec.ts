import { expect, test } from "@playwright/test";

test("home page renders the BarOps shell", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "BarOps" })).toBeVisible();
  await expect(page.getByText("Mesas, comandas, reservas, TPV e inventario")).toBeVisible();
});

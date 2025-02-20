/* eslint-disable linebreak-style */

const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:8081/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('can navigate to a specific Pokémon page', async ({ page }) => {
    await page.goto('http://localhost:8081/')
    await page.click('text=ivysaur')
    await expect(page).toHaveURL('http://localhost:8081/pokemon/ivysaur')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Previous')).toBeVisible()
    await expect(page.getByText('Next')).toBeVisible()
  })

  test('can navigate to the next Pokémon page', async ({ page }) => {
    await page.goto('http://localhost:8081/pokemon/ivysaur')
    await page.click('text=Next')
    await expect(page).toHaveURL('http://localhost:8081/pokemon/venusaur')
    await expect(page.getByText('venusaur')).toBeVisible()
  })

  test('can navigate to the previous Pokémon page', async ({ page }) => {
    await page.goto('http://localhost:8081/pokemon/ivysaur')
    await page.click('text=Previous')
    await expect(page).toHaveURL('http://localhost:8081/pokemon/bulbasaur')
    await expect(page.getByText('bulbasaur')).toBeVisible()
  })
})

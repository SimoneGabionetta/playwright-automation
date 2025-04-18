import {test, expect} from '@playwright/test'

test('application must be live', async({page}) =>{
  //steps
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
  await expect(page).toHaveTitle('Account Login')
  await page.waitForTimeout(3000)
})
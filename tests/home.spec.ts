import {test, expect} from '@playwright/test'

test('application must be live', async({page}) =>{
  //steps
  await page.goto('https://ecomerce-playground.lambdatest.io/index.php?route=account/login')
  await expect(page).toHaveTitle('Account Login')
})
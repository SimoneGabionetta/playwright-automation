import {test, expect} from '@playwright/test'

//suite
test.describe('test base',()=>{
    test.only('register new user',async({page})=>{

        //acess the page
        page.goto(' https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
       
        //1-locator + action
        const inputFirstName = page.locator('#input-firstname')
        await inputFirstName.fill('Lais')
      
           
        //2-locate directly
        await page.fill('id=input-lastname','Souza')
        await page.fill('id=input-email','nosso.email3@gmail.com')
        await page.fill('id=input-telephone','888888888')
        await page.fill('id=input-password','123456')
        await page.fill('id=input-confirm','123456')
        
        //xpath-checkbox
        await page.click('xpath=//label[@for="input-newsletter-yes"]')
        await page.click('xpath=//label[@for="input-agree"]')
        //xpath- button-value
        await page.click('xpath=//input[@value="Continue"]')
        //validation
        await expect(page).toHaveTitle('Your Account Has Been Created!')
        
        await page.waitForTimeout(5000)
    
       
    })
})

test.describe('tests using built-in method',()=>{
    test.only('register new user',async({page})=>{

        //acess the page
        page.goto(' https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
        //label First Name
       //await page.fill('id=input-fisrtname','Lais')
        await page.getByLabel('First Name').fill('Lais')
        await page.getByLabel('Last Name').fill('Souza')
                 
        await page.fill('id=input-email','nosso.email5@gmail.com')
        await page.fill('id=input-telephone','888888888')
        await page.fill('id=input-password','123456')
        await page.fill('id=input-confirm','123456')
        
        //checkbox
        await page.check('xpath=//label[@for="input-newsletter-yes"]')
        await page.check('xpath=//label[@for="input-agree"]')
        
        //role button,obj name value continue
        await page.getByRole('button', {name :"Continue"}).click()
        //validation
        await expect(page).toHaveTitle('Your Account Has Been Created!')
        
        await page.waitForTimeout(1000)
    
       
    })
})


//methods-builtin

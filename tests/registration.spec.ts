import {test, expect} from '@playwright/test'
import { faker } from '@faker-js/faker';


//suite
test.describe('test base',()=>{
    test('register new user',async({page})=>{

        //acess the page
        page.goto(' https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
       
        //1-locator + action
        const inputFirstName = page.locator('#input-firstname')
        await inputFirstName.fill('Lais')
      
           
        //2-locate directly
        await page.fill('id=input-lastname','Souza')
        await page.fill('id=input-email',faker.internet.email())
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
    test('register new user',async({page})=>{

        //acess the page
        page.goto(' https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
        //label First Name
       //await page.fill('id=input-fisrtname','Lais')
        await page.getByLabel('First Name').fill('Lais')
        await page.getByLabel('Last Name').fill('Souza')
                 
        await page.fill('id=input-email',faker.internet.email())
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

test.describe('user faker',()=>{
    test('register new user',async({page})=>{

    page.goto(' https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
             
          
    await page.fill('id=input-firstname',faker.person.firstName())
    await page.fill('id=input-lastname',faker.person.lastName())
    await page.fill('id=input-email',faker.internet.email())
    await page.fill('id=input-telephone',faker.phone.number())
        
    //generate 1xpassword, store sweep and use confirmation
    const pwd = faker.internet.password()

    await page.fill('id=input-password',pwd)
    await page.fill('id=input-confirm',pwd)
        
       
    await page.click('xpath=//label[@for="input-newsletter-yes"]')
    await page.click('xpath=//label[@for="input-agree"]')
    await page.click('xpath=//input[@value="Continue"]')
    //validation
    await expect(page).toHaveTitle('Your Account Has Been Created!')
        
    await page.waitForTimeout(5000)
    
       
    })
    // It makes sense to use only the email field because of the business rule
})

test.describe('test with other validations',()=>{
    test.only('register new user',async({page})=>{
       
    page.goto(' https://ecommerce-playground.lambdatest.io/index.php?route=account/register')

    await page.fill('id=input-firstname','Lais')    
    await page.fill('id=input-lastname','Souza')
    await page.fill('id=input-email',faker.internet.email())
    await page.fill('id=input-telephone','888888888')
    await page.fill('id=input-password','123456')
    await page.fill('id=input-confirm','123456')  
    await page.click('xpath=//label[@for="input-newsletter-yes"]')
    await page.click('xpath=//label[@for="input-agree"]')
    await page.click('xpath=//input[@value="Continue"]')
    
    //validations page
    await expect(page).toHaveTitle("Your Account Has Been Created!")
    await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/success")
    await expect(page.locator('xpath=//div[@id="content"]/h1')).toHaveText(' Your Account Has Been Created!')
  
    //validation button-locator e expect
    const continue_button = page.locator('xpath=//a[text()="Continue"]')
    await expect(continue_button).toBeVisible()
    await expect(continue_button).toBeEnabled()

    await page.waitForTimeout(1000)
           
    })
})






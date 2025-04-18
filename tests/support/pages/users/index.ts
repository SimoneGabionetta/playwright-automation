import {Page, expect } from '@playwright/test'
import { UserModel } from '../../../fixtures/user.model'

export class UsersPage{

    //prop 
    readonly page:Page
    //constructor
    constructor(page:Page){
        this.page = page
    }

     //function visit url
    async visitURL(){
        this.page.goto(' https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
    }

    //function register:receive user by param and fill in fields, click checkbox and click button
    async register(user: UserModel){//parm obj user
        await this.page.fill('id=input-firstname',user.firstName)    
        await this.page.fill('id=input-lastname',user.lastName)
        await this.page.fill('id=input-email',user.email)
        await this.page.fill('id=input-telephone',user.phone)
        await this.page.fill('id=input-password',user.password)
        await this.page.fill('id=input-confirm',user.confirmPassword)  

        if(user.newsLetter == true){
            await this.page.click('xpath=//label[@for="input-newsletter-yes"]')
        }
        
        if(user.terms == true){
        await this.page.click('xpath=//label[@for="input-agree"]')
        }       
        await this.page.click('xpath=//input[@value="Continue"]')
    }
    async checkTitle(){
        await expect(this.page).toHaveTitle("Your Account Has Been Created!")

    }
   
    
        
}



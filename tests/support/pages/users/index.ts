import {Page, expect, Locator } from '@playwright/test'
import { UserModel } from '../../../fixtures/user.model'

// access environment variables
require("dotenv").config()
const BASE_URL = process.env.BASE_URL

export class UsersPage{

    //prop 
    readonly page:Page
    //prop locators
    readonly firstName:Locator
    readonly lastName: Locator
    readonly email: Locator
    readonly phone: Locator
    readonly password: Locator
    readonly confirm: Locator
    readonly newsLetterYes: Locator
    readonly terms: Locator
    readonly continuosButton: Locator

    //constructor
    constructor(page:Page){
        this.page = page
        this.firstName = page.locator('id=input-firstname')
        this.lastName = page.locator('id=input-lastname')
        this.email = page.locator('id=input-email')
        this.phone = page.locator('id=input-telephone')
        this.password = page.locator('id=input-password')
        this.confirm = page.locator('id=input-confirm')
        this.newsLetterYes = page.locator('xpath=//label[@for="input-newsletter-yes"]')
        this.terms = page.locator('xpath=//label[@for="input-agree"]')
        this.continuosButton = page.locator('xpath=//input[@value="Continue"]')
        
    }

     //function visit url
    async visitURL(){
        //chec BASE_URL
        if(!BASE_URL){
            throw new Error("environment variable BASE_URL is not defined")
        }
        await this.page.goto(BASE_URL)
    }

    //function register:receive user by param and fill in fields, click checkbox and click button
    async register(user: UserModel){//parm obj user
        await this.firstName.fill(user.firstName)    
        await this.lastName.fill(user.lastName)
        await this.email.fill(user.email)
        await this.phone.fill(user.phone)
        await this.password.fill(user.password)
        await this.confirm.fill(user.confirmPassword)  

        if(user.newsLetter == true){
            await this.newsLetterYes.click()
        }
        
        if(user.terms == true){
        await this.terms.click()
        }       
        await this.continuosButton.click()
    }
    async checkTitle(){
        await expect(this.page).toHaveTitle("Your Account Has Been Created!")

    }   
   
    
        
}



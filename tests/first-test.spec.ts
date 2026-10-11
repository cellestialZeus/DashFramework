import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) => {
      await page.goto('https://playground.bondaracademy.com/')
      await page.getByText('Forms').click()
      await page.getByText('Form Layouts').click()
})

test('Locators Syntax Rules', async ({page}) => {
   // find by Tag and we put just the tag
   page.locator('input')

   // find by ID and need to use # for ID
   page.locator('#inputEmail1')

   // find by class value and need to use . for Class
   page.locator('.shape-rectangle')

   // find by any attribute  and need pass the attribute inside square braces []
   page.locator('[placeholder="Email"]')

   // find by full class value and need pass the class inside []
   page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

   // find by several selectors - 3 selectors 
   page.locator('input[placeholder="Email"].shape-rectangle')
   page.locator('input[placeholder="Email"][nbinput]')

   // find by Xpath and starts with '//*[@id=" "]' - (NOT RECOMMENDED)
   page.locator('//*[@id="inputMail"]')

   // find by partial text match and starts with ':text(" ")'
   page.locator(':text("Using")')
   
   // find by exact text match and starts with ':text-is(" ")'
   page.locator(':text-is("Using the Grid")')
})

test('User-visible locators', async ({page}) => {
   // click is a promise, so we need to use await or job run will move ahead without the action
 
   // Get by Role
   await page.getByRole('button', {name: 'Sign in'}).first().click()
   await page.getByRole('textbox', {name: 'Email'}).first().fill('keshavkumar@gmail.com')

   // Get by Label
   await page.getByLabel('Email').first().fill('kumarkeshav@gmail.com')

   // Get by Placeholder
   await page.getByPlaceholder('Jane Doe').fill('Keshav Kumar')

   // Get by Visible Text
   await page.getByText('Submit').first().click()

   // Get by Test ID
   await page.getByTestId('inputEmail1').fill('kumarkeshav@gmail.com')

   // Get by Title
   await page.getByTitle('IoT Dashboard').click()
})

test('Locating child locators', async ({page}) => {
   // Chain of locators seperated 
   await page.locator('nb-card').locator('nb-radio-group').locator(':text-is("Option 1")').click()

   // Chain of locators clubbbed
   await page.locator('nb-card nb-radio-group :text-is("Option 2")').click()

   // Combine regular and user-visible locators 
   await page.locator('nb-card').getByRole('button', {name: 'Sign in'}).first().click()

   // Index of elements
   await page.locator('nb-card').nth(3).getByRole('button').click()
})

test('Locating Parents elements', async ({page}) => {
   // await page.locator('nb-card', {hasText: 'Using the Grid'}).getByRole('button').click()

   await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('button').click()
   await page.locator('nb-card').filter({hasText: 'Using the Grid'}).getByRole('button').click()

})


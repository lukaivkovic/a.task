import loginPage from "../../pageClass/alasloginPage"
const user = require('../../fixtures/alas.json')
const selector = require('../../fixtures/alas2.json')

beforeEach('Log in to the site', function(){
    cy.visit('https://www.saucedemo.com/')
    loginPage.typeUsername('standard_user')
    loginPage.typePassword('secret_sauce')
    cy.get('.submit-button.btn_action').click()
    cy.url().should('include', '/inventory.html') // verifying the page contains the exact url
})
it('Managing the orders from the cart ', function(){
    cy.get('.product_sort_container').select(2) // sort cart (price low to high)
    cy.get('.inventory_item_name').should('have.length', '6') // verifying there are 6 products to choose from
    cy.get('#add-to-cart-sauce-labs-backpack').click() // add item to the shopping cart
    cy.get('.shopping_cart_badge').should('contain', '1') // verifying that shopping cart has 1 item
    cy.get('#item_0_title_link').click() // click on the item to see items details
    cy.get('#add-to-cart-sauce-labs-bike-light').click() // add item to the shopping cart
    cy.get('.shopping_cart_link').click() // click on the shopping cart
    cy.get('.shopping_cart_badge').should('contain', '2') //  verifying that shopping cart has 2 items
    cy.get('#remove-sauce-labs-backpack').should('be.enabled').click() // remove one of the items from the shopping cart
    cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Bike Light') // verifying that shopping cart has the item you want
})
it('Completing the order and verifying the order is complete', function(){
    cy.get('#add-to-cart-sauce-labs-backpack').click() // add idem to the shopping cart
    cy.get('.shopping_cart_link').click() // click on the shopping cart
    cy.get('#checkout').click() // click on the Checkout button
    cy.get(selector.firstName).type(user.firstName).should('have.value', 'Luka') // 
    cy.get(selector.lastName).type(user.lastName).should('have.value', 'Ivkovic')
    cy.get(selector.postalCode).type(user.postalCode).should('have.value', '11000')
    cy.get('#continue').click() // click on the Continue button
    cy.get('#finish').click() // click on the Finish button
    cy.get('.complete-header').should('have.text', 'Thank you for your order!').and('be.visible').screenshot() // verifying the order is succesfull
    cy.get('#back-to-products').should('be.enabled') // verifying Back Home button is enabled
})    
it('Opening LinkedIn link in another tab', function(){
cy.get('[href="https://www.linkedin.com/company/sauce-labs/"]').invoke('removeAttr', 'target').click()
})


// ** command to run tests in a headless browser **

// npx cypress run -–spec cypress/e2e/Alastask/alas_cypress.cy.js

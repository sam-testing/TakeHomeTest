// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// -- we could create cypress commands for commonly used functions and use them where necessary ex:login command --
Cypress.Commands.add('login', (email, password) => { 
    cy.get('[id="email"]').type(email)
    cy.get('[id="password"]').type(password)     
    cy.get('[id="logIn"]').click()   
 })

Cypress.Commands.add('checkNeedHelp', () => { 
    cy.get('.uni-text').contains('Need help')
})

Cypress.Commands.add('navigateToLoginPage', () => {
    cy.visit('/')
    cy.get('[data-qa-id="login-select"]').click()
    cy.wait(1000)
    cy.get('[data-qa-id="login-hudl"]').click()
    cy.url().should('include', '/login?')
})
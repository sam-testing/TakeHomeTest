import { Given, When, Then,} from "@badeball/cypress-cucumber-preprocessor";

        Given("I am on the Hudl landing page", function () {
          cy.visit(Cypress.config().baseUrl)
        });
        
        When("I click the Login Button" , function() { 
          cy.get('[data-qa-id="login-select"]').click()
        });

        When("I click the Hudl", function() { 
          cy.get('[data-qa-id="login-hudl"]').click()
        }); 

        Then("I should be taken to the login page",function() {
          cy.url().should('include', '/login?')
        });

        Then("I should see the email and password fileds",function() {
          cy.get('[id="email"]').should('exist');
          cy.get('[id="password"]').should('exist');
        });

        Given("I am on the login Page", function(){
        cy.navigateToLoginPage()
        })

        When("I click on the login button", function() {
        cy.get('[id="logIn"]')
        .click()
        })

        Then("I should see a messsage displayed with Need help link", function() {
        cy.checkNeedHelp()
        })

        When("I enter invalid {string} and {string}", function(email, password) {
        cy.get('[id="email"]').type(email)
        cy.get('[id="password"]').type(password)
        })

        When("I enter valid {string} and {string}", function() {
          cy.get('[id="email"]').type('samantu001@gmail.com')
          cy.get('[id="password"]').type('TestPassword@1973')
          })

        Then("I should be logged in and land on the Home page", function() {
          cy.title().should('eq', 'Home - Hudl')  
        })

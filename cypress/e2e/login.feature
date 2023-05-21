
@login
Feature: Login functionality 

                    As a registered user 
                    I should be able to log into the HUDL application
                    So that I can view my video content 

            @regression
            Scenario: User able to navigate to the login page 
            Given I am on the Hudl landing page 
            When I click the Login Button 
            When I click the Hudl
            Then I should be taken to the login page 

            @regression
            Scenario: User able to see email and password fields 
            Given I am on the Hudl landing page 
            When I click the Login Button 
            When I click the Hudl
            Then I should see the email and password fileds 

            @smoke
            @regression
            Scenario: User able see Need help message on failed login attempt on blank credentials
            Given I am on the login Page 
            When I click on the login button
            Then I should see a messsage displayed with Need help link

            @smoke
            @regression
            Scenario: User able see Need help message on failed login attempt with invalid credentials 
            Given I am on the login Page 
            When I enter invalid "email" and "password"
            When I click on the login button
            Then I should see a messsage displayed with Need help link

            @smoke
            @regression
            Scenario: User able to successfully login with valid credentials and land on the Home page
            Given I am on the login Page 
            When I enter valid "email" and "password"
            When I click on the login button
            Then I should be logged in and land on the Home page

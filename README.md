# TakeHomeTest
This is a cucumber-based Cypress BDD automation framework that was designed with specific Cypress commands for code reuse and ease of maintenance.

**Steps to run the framework in local machine:**
1. Clone the repository

2. **Install node.js and npm:**\
Download and install node.js from here: https://nodejs.org/en/download. (By default comes with npm)\
-Verify both have been installed by running below commands:\
$ node -v or node --version\
$ npm -v or npm --version

3. **Installing Cypress via npm:**\
$ npm install cypress --save-dev

4. **To use Typescript with Cypress run below command:**\
$ npm install --save-dev typescript

4. **Install cypress cucumber preprocessor plugin to support BDD and install bahmutov library:**\
$ npm install @badeball/cypress-cucumber-preprocessor\
$ npm install @bahmutov/cypress-esbuild-preprocessor

5. **You could execute the tests by running login.feature in two ways as mentioned below.**
- Run below command to open the Cypress test runner\
$ npx cypress open
- Select End to End testing and then choose Chrome browser and click start E2E testing in chrome
- Click on the login.feature file to run the login tests\
  (or)
- Open Terminal within the project folder and run below command\
$ npx cypress run -- login.feature

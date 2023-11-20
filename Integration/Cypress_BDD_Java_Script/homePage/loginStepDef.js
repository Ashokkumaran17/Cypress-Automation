import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I open the website', function()  {

    cy.visit('http://www.automationpractice.pl/index.php');
    cy.get('.login').click()

});

When('I enter my username {string} and password {string}', function(username, password)  {

    cy.get('#email').type(username);

    cy.get("#passwd").type(password);

});
And('I click the login button', function()  {

    cy.get('#SubmitLogin').click();

});

Then('I should be logout', function() {
    cy.get('.logout').click()
    //cy.url().should('eq', 'https://example.com/dashboard');

    //cy.contains('Welcome, User!').should('be.visible'); // Replace with an element or text on the dashboard page

});
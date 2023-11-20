///<reference types="cypress-iframe" />
//Install cypress iframe:      npm install -D cypress-iframe
import 'cypress-iframe'
// or
require('cypress-iframe');
describe('IFrame Test Suite', function () {
    // test case
    it('IFrame TestCase', function () {
        // launch the application
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.wait(2000)

        // This will verify that the iframe is loaded to any page
        cy.frameLoaded('#courses-iframe')
        //This will verify that the iframe is loaded
        cy.iframe().find('a[href="mentorship"]').eq(0).click()

    })
})


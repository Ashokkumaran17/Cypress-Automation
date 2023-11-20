describe('URL Test Suite', function () {
    // test case
    it('URL TestCase', function () {
        // launch the application
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.wait(2000)
        //click Contact Us
        cy.contains('Contact us').click()
        cy.url().should('include', 'contact')
    })
})
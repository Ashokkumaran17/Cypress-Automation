describe('Visible element validation Test Suite', function() {
    it('Visible element Testcase', function () {
        //navigate the URL
        cy.visit("https://practice.expandtesting.com/key-presses")
        cy.wait(2000)
        //check Element is visible
        cy.get('input#target').should('be.visible')
        //click After visible
        cy.get('input#target').should('be.visible').click()
        //Enter the name
        cy.get('input#target').type('Ashok')

    })
})
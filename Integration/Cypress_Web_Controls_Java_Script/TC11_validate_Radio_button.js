describe('Radio Button validation Test Suite', function() {
    it('Checkbox handle', function () {
        //navigate the URL
        cy.visit("https://practice.expandtesting.com/radio-buttons")
        cy.wait(2000)
        //click Red
        cy.get('input#red').click()
        //validate the Radio button
        cy.get('input#red').check().should('be.checked')
        cy.wait(2000)
        //click
        cy.get('input#football').click()
        //Validate the Radio button
        cy.get('input#football').check().should('be.checked')


    })
})
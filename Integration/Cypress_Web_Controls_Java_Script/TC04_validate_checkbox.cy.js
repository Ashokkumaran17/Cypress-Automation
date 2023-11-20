describe('Checkbox validation Test Suite', function() {
    it('Checkbox handle', function () {
        //navigate the URL
        cy.visit("https://practice.expandtesting.com/checkboxes")
        cy.wait(2000)
        //uncheck checkbox2
        //cy.get('#checkbox2').click()
        //validate the Checkbox2 unchecked
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.wait(2000)
        //click checkbox1
        //cy.get('#checkbox1').click()
        //validate the Checkbox1 is checked
        cy.get('#checkbox1').check().should('be.checked')
        //another method
        //cy.get('#checkbox1').check().should('be.checked').and('have.value','Checkbox 1')


    })
})
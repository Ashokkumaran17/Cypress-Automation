describe('Static Dropdown validation Test Suite', function() {
    it('Static Dropdown Testcase', function () {
        //navigate the URL
        cy.visit("https://practice.expandtesting.com/dropdown")
        cy.wait(2000)
        //uncheck checkbox2
        //cy.get('#checkbox2').click()
        //click the dropdown and select by value
        //cy.get('select#dropdown').select('Option 1')
        cy.get('select#dropdown').select('Option 1').should('have.value','1')
        cy.wait(2000)
        //click the dropdown and select by index
        cy.get('select#dropdown').select(2)
        /*
        //Select the date
        //click the dropdown and select by value
        cy.get('select#elementsPerPageSelect').select('50').click()
        cy.wait(2000)
        //click the dropdown and select by index
        cy.get('select#elementsPerPageSelect').select(2).click()
        */
        cy.wait(2000)
        //Select the country
        //click the dropdown and select by value
        //cy.get('select#country').select('India')
        cy.get('select#country').select('India').should('have.value','IN')
        cy.wait(2000)
        //click the dropdown and select by index
        cy.get('select#country').select(3)

    })
})
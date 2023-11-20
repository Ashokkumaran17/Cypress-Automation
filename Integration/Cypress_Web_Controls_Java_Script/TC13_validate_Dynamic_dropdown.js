describe('Dynamic Dropdown validation Test Suite', function() {
    it('Dynamic Dropdown Testcase', function () {
        //navigate the URL
        cy.visit("https://practice.expandtesting.com/dropdown")
        cy.wait(2000)
        /*
        //Dynamic Elements
        //click the dropdown
        cy.get('select#country').type('IN')
        cy.get('#country > option').each(($el,index,$list)=>{
            if($el.text()==='India'){
               $el.click()

            }
        })
        */
        cy.get('select#country').select('India').should('have.value','IN')


    })
})
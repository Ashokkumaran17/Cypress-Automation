describe("My first testsuite",function ()
{
    it("My first testcase",function (){
        //visit method used to navigating the URL
        cy.visit("http://www.automationpractice.pl/index.php")
        //cypress always run with headless mode
        cy.wait(2000)
        cy.get(' #search_query_top').type('EVENING DRESSES')
        cy.wait(2000)
        //count the image
        cy.get('#center_column').find('ul').should('have.length',5)

    })

})
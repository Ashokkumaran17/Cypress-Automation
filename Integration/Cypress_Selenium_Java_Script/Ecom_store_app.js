describe("My first testsuite",function ()
{
    it("My first testcase",function (){
        //visit method used to navigating the URL
        cy.visit("https://automationexercise.com/products")
        //cypress always run with headless mode
        cy.wait(2000)
        cy.get('#search_product').type('polo')
        cy.wait(2000)
        //count the image
        //cy.get('#cartModal').should('have.length',1)

    })

})
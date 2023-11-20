describe("My first testsuite",function ()
{
    //click the dress category
    it("Click Dress category and display the Casual Dress count",function (){
        let expName = "Login - My Shop"
        //visit method used to navigating the URL
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.wait(4000)
        cy.get('.login').click()
        cy.wait(4000)
        assert.equal("Login - My Shop",expName)
        cy.wait(2000)
        //enter the email id oj email field
        cy.get('#email').type('selenium_java_2023@yopmail.com')
        //enter the password on password field
        cy.get("#passwd").type('Java2023')
        //click the submit button
        cy.get('#SubmitLogin').click()
        cy.wait(5000)
        //click home Icon
        cy.get('.home').click()
        cy.wait(3000)
        //click Dresses category
        cy.get('.sf-with-ul').eq(3).should('have.text', 'Dresses').click()

        cy.wait(2000)
        //click Casual dress
        cy.get('div#categories_block_left').contains('Casual Dresses').click()
        //count the no of items on casual Dresses
        cy.wait(2000)
        cy.get('#center_column > ul >li').should('have.length',1)

        //click the logout the button
        cy.wait(6000)
        //click the logout button
        cy.get('.logout').click()


    })

})
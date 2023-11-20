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
        cy.wait(6000)
        //count the no of items on Top Menu
        cy.get('div#block_top_menu > ul > li').should('have.length',4)
        //iterate the items
        cy.get('div#block_top_menu > ul > li').each(($li) => cy.log($li.text()))
        //cy.get('div#block_top_menu > ul > li').each(($el, index, $list) => {
            //console.log($el.text())
        //})
        //click the logout the button
        cy.wait(6000)
        //click the logout button
        cy.get('.logout').click()


    })

})
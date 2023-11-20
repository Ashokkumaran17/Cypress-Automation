describe("My first testsuite",function ()
{
    //click the dress category
    it("Click Women category and display the count",function (){
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
        cy.get('div#block_top_menu > ul > li > a[title="Women"]').click()
        cy.wait(2000)
        cy.get('#center_column > ul >li').should('have.length',7)

        //display the name of the items
        cy.get('#center_column > ul >li').each(($el, index, $list) => {

        })
        //cy.get('#center_column > ul >li').then(function($elem) {
            //cy.log($elem.text())
        //})


        //click the logout the button
        cy.wait(4000)
        //click the logout button
        cy.get('.logout').click()
        cy.wait(2000)


    })

})
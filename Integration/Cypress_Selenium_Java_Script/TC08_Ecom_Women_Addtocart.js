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
        //click the Faded Short Sleeve T-shirts
        cy.get('div#center_column > ul > li').find('a.product-name').eq(0).click()
        //click the add to cart
        cy.get('p#add_to_cart').click()
        cy.wait(4000)
        //check items successfully added or not?
        //cy.get('div#layer_cart').find('i.icon-check')
        cy.wait(7000)
        cy.get('div#layer_cart').find('div.button-container').find('a.btn.btn-default.button.button-medium').click()
        cy.wait(6000)
        //click proceed to checkout btn
        //cy.get('p.cart_navigation clearfix').find('a.button.btn.btn-default.standard-checkout.button-medium').click()
        //cy.wait(6000)
        //click the cart
        //cy.get('div.shopping_cart').click()
        //cy.wait(4000)
        cy.get('a#1_1_0_0').find('i.icon-trash').click()
        //click the logout the button
        cy.wait(4000)
        //click the logout button
        cy.get('.logout').click()
        cy.wait(2000)


    })

})

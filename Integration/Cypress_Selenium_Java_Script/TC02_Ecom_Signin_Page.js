describe("My first testsuite",function ()
{

    //Navigate the Home page URL
    it("Navigate the Home page",function (){
        let expName = "My Shop";
        //visit method used to navigating the URL
        cy.visit("http://www.automationpractice.pl/index.php")
        //cypress always run with headless mode
        cy.wait(2000)
        assert.equal('My Shop',expName)
    })
    //Click the Sign in Button
    it("Click the Sign In Button",function (){
        //visit method used to navigating the URL
        cy.visit("http://www.automationpractice.pl/index.php")
        let expName = "Login - My Shop";
        cy.wait(4000)
        cy.get('.login').click()
        cy.wait(4000)
        assert.equal("Login - My Shop",expName)

    })
    //Enter the username and password for existing user
    it("Enter the username and password",function (){
        //visit method used to navigating the URL
        cy.visit("http://www.automationpractice.pl/index.php")
        let expName = "Login - My Shop";
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
        //click the logout the button
        cy.wait(6000)
        //click the logout button
        cy.get('.logout').click()

    })




})
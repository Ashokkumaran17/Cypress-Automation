describe("Testsuite",function () {
    before(function () {
        //load the example.json file from fixture
        cy.fixture('example.json').then(function (data){
            //global val
            this.data=data
        })
    })
    //Navigate the Home page URL
    it("Sign-In Testcase",function (){
        //visit method used to navigating the URL
        cy.visit(this.data.urlName)
        let expName = "Login - My Shop";
        cy.wait(4000)
        cy.get('.login').click()
        cy.wait(4000)
        assert.equal("Login - My Shop",expName)
        cy.wait(2000)
        //enter the email id oj email field
        cy.get('#email').type(this.data.emailId)
        //enter the password on password field
        cy.get("#passwd").type(this.data.pwd)
        //click the submit button
        cy.get('#SubmitLogin').click()
        //click the logout the button
        cy.wait(6000)
        //click the logout button
        cy.get('.logout').click()

    })

})
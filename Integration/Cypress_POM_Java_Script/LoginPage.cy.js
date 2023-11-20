class loginPage{
    //locator
    elements ={
        usernameField : () => cy.get('#email').type('selenium_java_2023@yopmail.com'),
        passwordField : () => cy.get("#passwd").type('Java2023'),
        loginBtn : () => cy.get('#SubmitLogin')
   }
   //login Page feature
   login(){

        this.elements.usernameField();
        this.elements.passwordField();
        this.elements.loginBtn().click();

   }

}

module.exports = new loginPage();
//require(‘cypress-xpath’)
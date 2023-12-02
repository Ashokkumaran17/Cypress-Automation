class loginPage{
    //LoginPage Locator
    elements = {
        uRL : ()=> cy.visit("https://wecare.inspirisys.com"),
        userNameField : () =>cy.get("#Username").type("<Username>"),
        passWordField : () =>cy.get("#Password").type("<Password>"),
        signInBtn : () =>cy.get("button[type='submit']")

    }
    InvokeBrowser() {
        this.elements.uRL();

    }
    Enter_UserName() {
        this.elements.userNameField();

    }
    Enter_Password() {
        this.elements.passWordField();

    }
    SignInBtn(){
        this.elements.signInBtn().click();
    }

}
module.exports = new loginPage();
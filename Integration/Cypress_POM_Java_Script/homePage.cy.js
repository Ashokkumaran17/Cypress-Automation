class homePage{

    elements ={
        loginBtn : () => cy.get('.login'),
        logoutBtn : () =>  cy.get('a.logout'),
        timeout:()=>cy.wait(4000)

    }
    click_SignIn_btn()
    {
        this.elements.loginBtn().click()
    }
    click_logout_btn()
    {
        this.elements.timeout()
        this.elements.logoutBtn().click()
    }


}


module.exports = new homePage();
//export default homePage();
class LogoutPage{
    elements ={
        squareTab : () =>cy.get('ul > li.imgtop.yellow1').find('div.GoogleButton').trigger('mouseover'),
        //squareTab : () =>cy.get('ul > li.imgtop.yellow1').find('div.GoogleButton'),
        logoutBtn : () =>cy.contains("Sign out")

    }
    LogOutBtn_click(){
        //this.elements.squareTab().click({force: true});
        this.elements.squareTab();
        this.elements.logoutBtn().click({force: true})
    }
}
module.exports = new LogoutPage();
class MenuBar{
    elements ={
        menu : () =>cy.get("ul#gn-menu").find("a[title='Click here for Menu']").trigger('mouseover'),
        leaveTab : () =>cy.contains("Leave"),
        homeBtn : () =>cy.contains("Home")

    }
    MenuBar_click(){
        this.elements.menu();
        this.elements.menu().click({force: true});

   }
   LeaveTab_click(){
       this.elements.leaveTab().click({force: true});
   }
   HomeBtn_click(){
       this.elements.homeBtn().click({force: true});
   }
}
module.exports = new MenuBar();
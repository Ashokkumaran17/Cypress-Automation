class topMenuPage{

    elements ={
        WomenCategory : () => cy.contains('Women').invoke('show'),
        Women_tab:()=>cy.contains('Women'),
        women_count:()=> cy.get('#center_column > ul >li'),
        top_menu_count:()=>cy.get('div#block_top_menu > ul > li'),
        tops_count:()=>cy.get('div#center_column > ul > li'),
        TopsSubMenu :() =>cy.contains('Tops'),
        HomeBtn :()=>cy.get('[title="Return to Home"]'),
        DressCategory : () =>  cy.get('[title="Dresses"]').eq(1).invoke('show'),
        CasualDress:()=>cy.contains('Casual Dresses')

    }
    click_women_tab()
    {
        this.elements.WomenCategory();
        this.elements.Women_tab().click();


    }
    click_tops_submenu(){
        this.elements.TopsSubMenu().click({force:true});
    }
    click_home_icon()
    {
        this.elements.HomeBtn().click()
    }
    click_dress_tab()
    {
        this.elements. DressCategory();
        this.elements.CasualDress().click({force:true});

    }


}
module.exports = new topMenuPage();
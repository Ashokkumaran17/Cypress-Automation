class Addtocart{

    elements ={
        FadedShortSleeve : () => cy.get('div#center_column > ul > li').find('a.product-name').eq(0),
        add_to_cartBtn : () =>  cy.get('p#add_to_cart'),
        proceedBtn: ()=>cy.get('div#layer_cart').find('div.button-container').find('a.btn.btn-default.button.button-medium'),
        removeItem: () =>cy.get('a#1_1_0_0').find('i.icon-trash')


    }
    click_tShirts()
    {
        this.elements.FadedShortSleeve().click()
    }
    click_add_to_cart_btn()
    {
        this.elements.add_to_cartBtn().click()
    }
    click_proceed(){
        this.elements.proceedBtn().click()

    }
    remove_item_from_cart(){
        this.elements.removeItem().click()
    }



}


module.exports = new Addtocart();
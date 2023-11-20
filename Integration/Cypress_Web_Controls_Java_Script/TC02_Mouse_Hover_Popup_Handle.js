describe('MouseHover Test Suite', function () {
    // test case
    it('MouseHover TestCase', function (){
        // launch the application
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.wait(2000)
        cy.contains('Women').invoke('show')

        //mouse hover operation .move the mouse
        //cy.contains('Women').trigger('mouseover').click()
        //cy.wait(2000)
        //click T-Shirts
        cy.contains('Tops').click({force:true});
        //cy.get('[title="Tops"]').click({force:true});

        //click Home Icon
        cy.get('[title="Return to Home"]').click()
        cy.get('[title="Dresses"]').eq(1).invoke('show')
        //mouse hover operation .move the mouse
        //cy.get('[title="Dresses"]').trigger('mouseover').click()
        //cy.get('[title="Dresses"]').eq(1).trigger('mouseover').click()
        cy.contains('Casual Dresses').click({force:true});



    });
});
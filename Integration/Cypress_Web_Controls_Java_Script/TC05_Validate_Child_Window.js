describe('Handling Child Windows', () => {
    /*
    it('Should handle child window', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get("#opentab").invoke('removeAttr','target').click();

        cy.origin("https://www.qaclickacademy.com",()=>
        {
            cy.get("#navbarSupportedContent a[href*='about']").click();
            cy.get(".mt-50 h2").should('contain','QAClick Academy');

        })
    });

     */
    it('Handling new Browser Tab', function () {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr', 'target').click()
        cy.url()
            .should('include', '/windows/new')
        cy.get('h3')
            .should('have.text', 'New Window')
    })

});
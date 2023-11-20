describe('Child Tab validation Test Suite', function() {
    it('Child Tab handle', function () {
        //navigate the URL
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.wait(2000)
        //click Blog
        //cy.get('div#block_top_menu > ul > li').eq(3).find('a[title="Blog"]').click()
        cy.get('a#opentab').invoke('removeAttr','target').click()
        cy.wait(4000)



    })

})
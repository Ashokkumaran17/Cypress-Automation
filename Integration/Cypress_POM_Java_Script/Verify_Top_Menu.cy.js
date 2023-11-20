

import homePage from '../../Integration/Cypress_POM_Java_Script/homePage.cy'
import loginPage from '../..//Integration/Cypress_POM_Java_Script/LoginPage.cy'
import topMenuPage from '../..//Integration/Cypress_POM_Java_Script/topmenuPage.cy'
describe("Top Menu Page Validation testsuite",function ()
{
    it("Top Menu Page  Testcase", () =>{
        cy.visit('http://www.automationpractice.pl/index.php')
        homePage.click_SignIn_btn();
        loginPage.login();
        //count the no of items on Top Menu
        topMenuPage.elements.top_menu_count().should('have.length',4)
        topMenuPage.click_women_tab();
        //count the no of items on Women category
        topMenuPage.elements.women_count().should('have.length',7)
        topMenuPage.click_tops_submenu();
        //count the no of items on Tops
        topMenuPage.elements.tops_count().should('have.length',2)
        topMenuPage.click_home_icon();
        topMenuPage.click_dress_tab();
        homePage.elements.logoutBtn().should('have.text','\n\t\t\tSign out\n\t\t')
        homePage.click_logout_btn();


    })
})
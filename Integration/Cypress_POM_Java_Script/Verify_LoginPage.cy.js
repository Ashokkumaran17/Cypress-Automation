

import homePage from '../../Integration/Cypress_POM_Java_Script/homePage.cy'
import loginPage from '../..//Integration/Cypress_POM_Java_Script/LoginPage.cy'
describe("Login Page testsuite",function ()
{
    it("Login page Testcase", () =>{
        cy.visit('http://www.automationpractice.pl/index.php')
        homePage.click_SignIn_btn();
        loginPage.login();
        homePage.elements.logoutBtn().should('have.text','\n\t\t\tSign out\n\t\t')
        homePage.click_logout_btn();


    })
})
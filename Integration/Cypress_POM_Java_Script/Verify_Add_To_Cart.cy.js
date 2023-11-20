import homePage from '../../Integration/Cypress_POM_Java_Script/homePage.cy'
import loginPage from '../..//Integration/Cypress_POM_Java_Script/LoginPage.cy'
import topMenuPage from '../..//Integration/Cypress_POM_Java_Script/topmenuPage.cy'
import Addtocart from '../..//Integration/Cypress_POM_Java_Script/Addtocart.cy'
describe("Add to cart Page Validation testsuite",function ()
{
    beforeEach(function() {
        // executes prior each test within it block
        cy.visit('http://www.automationpractice.pl/index.php');
    })
    it("Add to cart Page  Testcase", () =>{

        homePage.click_SignIn_btn();
        loginPage.login();
        //count the no of items on Top Menu
        topMenuPage.elements.top_menu_count().should('have.length',4)
        topMenuPage.click_women_tab();
        //count the no of items on Women category
        topMenuPage.elements.women_count().should('have.length',7)
        Addtocart.click_tShirts();
        Addtocart.click_add_to_cart_btn();
        Addtocart.click_proceed();
        Addtocart.remove_item_from_cart();
        //checkout Sign out btn display on the page?
        homePage.elements.logoutBtn().should('have.text','\n\t\t\tSign out\n\t\t')
        //logout the application
        homePage.click_logout_btn();


    })
})
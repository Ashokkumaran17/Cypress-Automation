import LoginPage from '../../Integration/WeCare_JavaScript_Automation/TC_WeCare_LoginPage.cy'
import LogoutPage from '../../Integration/WeCare_JavaScript_Automation/TC_WeCare_LogOutPage.cy'
import Menu from '../../Integration/WeCare_JavaScript_Automation/TC_Wecare_MenuBar.cy'
import ODPage from '../../Integration/WeCare_JavaScript_Automation/TC_Wecare_OD_Page.cy'
import DatePickerTable from '../../Integration/WeCare_JavaScript_Automation/TC_WeCare_DatePicker.cy'



describe("WeCare portal Apply OD Testsuite",function(){
    it("WeCare Portal Apply OD Testcase",()=>{
        LoginPage.InvokeBrowser();
        LoginPage.Enter_UserName();
        LoginPage.Enter_Password();
        LoginPage.SignInBtn();
        Menu.MenuBar_click();
        Menu.LeaveTab_click();
        ODPage.ODAppBtn();
        DatePickerTable.DatePicker()
        //Enter the Row value here
        let i=2;
        for(let j=2;j<=2;i++){
            cy.get("div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-top > div.datepicker-days > table > tbody > tr:nth-child("+i+") > td:nth-child("+j+")").click();
            ODPage.ProceedBtn_click();
            ODPage.ReasonDrop();
            ODPage.ContactField();
            ODPage.ApplyBtn_click();
            ODPage.AlertHandle();
            ODPage.BackBtn_click();
            ODPage.ODAppBtn();
            DatePickerTable.DatePicker();
        }
        Menu.MenuBar_click();
        Menu.HomeBtn_click();
        LogoutPage.LogOutBtn_click();

    })

})
import LoginPage from '../../Integration/WeCare_JavaScript_Automation/TC_WeCare_LoginPage.cy'
import LogoutPage from '../../Integration/WeCare_JavaScript_Automation/TC_WeCare_LogOutPage.cy'
import Menu from '../../Integration/WeCare_JavaScript_Automation/TC_Wecare_MenuBar.cy'
import ODPage from '../../Integration/WeCare_JavaScript_Automation//TC_Wecare_OD_Page.cy'

describe("WeCare portal OD Testsuite",function(){
    it("WeCare Portal OD Testcase",()=>{
        LoginPage.InvokeBrowser();
        LoginPage.Enter_UserName();
        LoginPage.Enter_Password();
        LoginPage.SignInBtn();
        Menu.MenuBar_click();
        Menu.LeaveTab_click();
        ODPage.ODAppBtn();
        ODPage.ProceedBtn_click();
        ODPage.ReasonDrop();
        ODPage.ContactField();
        ODPage.ApplyBtn_click();
        ODPage.AlertHandle();
        ODPage.BackBtn_click();
        Menu.MenuBar_click();
        Menu.HomeBtn_click();
        LogoutPage.LogOutBtn_click();

    })
})
import LoginPage from '../../Integration/WeCare_JavaScript_Automation/TC_WeCare_LoginPage.cy'
import LogoutPage from '../../Integration/WeCare_JavaScript_Automation/TC_WeCare_LogOutPage.cy'

describe("Login Test TestSuite", function (){
    it("WeCare Login Page testcase",() =>{
        LoginPage.InvokeBrowser();
        LoginPage.Enter_UserName();
        LoginPage.Enter_Password();
        LoginPage.SignInBtn();
        LogoutPage.LogOutBtn_click()

    })

})
class ODPage{
    elements ={
        ODApplicationBtn :()=>cy.contains("OnDuty Application"),
        proceedBtn : () =>cy.get("#btnProceed"),
        //dropDownOption : () =>cy.get("select#OnDutyHD_laReasonDrop"),
        contactNum : () =>cy.get("#OnDutyHD_laPhoneNo"),
        applyBtn : () =>cy.get("#btnSubmit"),
        backBtn : () =>cy.get("input[value=\"Back\"]")

    }
    ODAppBtn(){
        this.elements.ODApplicationBtn().click();
    }
    ProceedBtn_click(){
        this.elements.proceedBtn().click();
    }
    ReasonDrop(){
        //this.elements.reason().click({force: true});
        //cy.wait(2000);
        cy.get('#OnDutyHD_laReasonDrop > option:nth-child(5)');
        //cy.get('select[id="OnDutyHD_laReasonDrop"]').select(4).select("32").should('have.value', "32");
        //this.elements.dropDownOption().select(4).invoke("text").should("eq","On Duty");
        //invoke("val").should('eq',32);
        //cy.get("select option:selected").invoke("text").should("eq", "On Duty");
        //select("On Duty")
        //this.elements.dropDownOption().should('have.value',"On Duty");
        cy.wait(1000);
        //cy.contains("On Duty").click();
    }
    ContactField(){
        //this.elements.contactNum().click();
        this.elements.contactNum().type('<MobileNumber>');
    }
    ApplyBtn_click(){
        this.elements.applyBtn().click();

    }
    BackBtn_click(){
        this.elements.backBtn().click();
    }
    AlertHandle(){
        cy.on('window:confirm',(txt)=>{
            expect(txt).to.contains('');
        })
    }
}
module.exports = new ODPage();

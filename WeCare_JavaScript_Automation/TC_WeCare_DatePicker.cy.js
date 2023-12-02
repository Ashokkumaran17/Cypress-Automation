
class DateTable{
    elements ={
        dateTable : () => cy.get("input[id=\"OnDutyHD_laLeaveFrom\"]"),
        leftArrow : () =>cy.get("div[class=\"datepicker-days\"]").find("th[class=\"prev\"]")

    }
    DatePicker(){
        this.elements.dateTable().click();
    }
    PreviousMonth(){
        this.elements.leftArrow().click();

    }

}
module.exports =new DateTable();


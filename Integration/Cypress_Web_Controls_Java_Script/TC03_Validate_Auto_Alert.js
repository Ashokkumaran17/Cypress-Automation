describe('Alert validation Test Suite', function() {
    it('Alert Testcase', function () {
        //navigate the URL
        cy.visit("https://nxtgenaiacademy.com/alertandpopup/")
        cy.wait(2000)
        //click AlertBox
        cy.get('button[name="alertbox"]').click()
        //validate the Alert message
        cy.on('window:alert',(str)=>{
            expect(str).to.equal("I am an alert box!")
        })
        cy.wait(2000)

        //Click confirm Alert box
        cy.get('button[name="confirmalertbox"]').click()
        //validate the Alert message
        cy.on('window:alert2',(alrt_str)=>{
            expect(alrt_str).to.equal("Confirm pop up with OK and Cancel button")
        })
        cy.wait(2000)
        //Click Prompt Alert box and prompt will appear and user manually click the Ok btn
        cy.get('button[name="promptalertbox1234"]').click()



    })
})
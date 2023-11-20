describe('Web Table validation Test Suite', function() {
    it('Web Table handle', function () {
        //navigate the URL
        cy.visit("https://nxtgenaiacademy.com/webtable/")
        cy.wait(2000)

        //click Blog
        cy.get('table > tbody > tr:nth-child(1) > td:nth-child(2)').each(($el,index,$list)=>{
                if($el.text()==='Sundar'){
                    cy.log("First Name is:"+$el.text())
                    console.log("First Name is:"+$el.text())
                }

        })
        cy.get('table > tbody > tr:nth-child(6) > td:nth-child(1)').each(($el2,index,$list)=>{
            if($el2.text()==='Title'){
                cy.get('table > tbody > tr:nth-child(6) > td:nth-child(2)').each(($el3,index,$list)=> {

                    cy.log("Title is:" + $el3.text())
                    console.log("Title is:" + $el3.text())
                })
            }
        })

        cy.wait(4000)



    })

})
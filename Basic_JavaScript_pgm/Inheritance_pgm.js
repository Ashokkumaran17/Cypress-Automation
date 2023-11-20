class Student{

    block="A"
    constructor(name,id) {
        this.name=name
        this.id=id

    }
    get location()
    {
        return "Ballot Street"
    }
    Welcome()
    {
        console.log("Welcome to the member of AI design and Search!!!")
    }


}
class University extends Student
{

    place="Arizona"
    country="United state"
}
var obj=new University("John",101)
console.log("Name is: "+obj.name)
console.log("ID is: "+obj.id)
console.log("Block is: "+obj.block)
console.log("Place is: "+obj.place)
console.log("Country is: "+obj.country)
console.log("Location is: "+obj.location)
obj.Welcome()

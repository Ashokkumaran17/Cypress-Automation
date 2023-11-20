class Person{
    name ="Ashok"
    age=32;
    place="Bangalore"
    country="India"

    //we can use getter method to define the variable
    get location(){
        return "Jaya nagar"
    }
    //create the constructor
    constructor(firstName,lastName) {
        this.firstName=firstName
        this.lastName=lastName
    }
    //create the method
    fullName(){
        console.log("Full name is :"+this.firstName+" "+this.lastName)
    }
}
//create the object
var obj = new Person()
console.log("name is :"+obj.name)
console.log("age is :"+obj.age)
console.log("place is :"+obj.place)
console.log("country is :"+obj.country)
console.log("Location  is :"+obj.location)
//pass the value on class
var obj2 = new Person("John","Doe")
console.log("First Name is: "+ obj2.firstName)
console.log("Last Name is: "+obj2.lastName)
//call the method
obj2.fullName()


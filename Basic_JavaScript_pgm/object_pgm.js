let Person={
    FirstName :"Ashok",
    LastName:"Kumar"

}
//display the First name and last name
console.log("First Name is:"+Person.FirstName)
console.log("Last Name is:"+Person['LastName'])

//assign to the new name
Person.FirstName ="Ajit"
console.log("First Name is:"+Person.FirstName)
//delete the last name
delete Person.LastName
Person.LastName ="Tiger"
console.log("Last Name is:"+Person['LastName'])

//iterate the object
for(let key in Person){
    console.log(Person[key])
}






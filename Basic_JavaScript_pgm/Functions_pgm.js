function add(a,b) {
    return a+b
}
//call the func
var c=add(2,3)
console.log("Add func output is:"+c)


//simple function
var add_func=(x,y)=>(x=y)
console.log("func call output is :"+add_func(2,5))

//scope local and global variable
let greet="Good Morning"
function Greeting(){
    var greet = "Hi,Good morning"
    console.log("display the local variable :"+greet)
}
//call the func
Greeting()
console.log("display the Global variable :"+greet)


console.log("Hello World");
console.log("Welcome to the java script!!!");
 let a =4;
 let b="Ashok";
 let c =true
 //let ,const can be used
console.log("typeof(a) val is:"+typeof(a));
console.log("a val is: "+a);

console.log("typeof(b) val is:"+typeof(b));
console.log("b val is: "+b);

console.log("typeof(c) val is:"+typeof(c));
console.log("c val is: "+c);
var n1 = 12;
var n2 =13;
var sum_val = n1+n2;
console.log("sum val is: "+sum_val);

//var -we can redeclare the value
//let -we cannot redeclare the the value
var sum=0;
for (let i=0;i<10;i++){

  sum+=i;

}
console.log("sum val is: "+sum);

var even_sum=0;
var odd_sum=0;
for (let i=0;i<10;i++){
 if (i%2==0){
  even_sum+=i;

 }
 else{
   odd_sum+=i;
 }
}
console.log("Even sum val is: "+even_sum);
console.log("Odd sum val is: "+odd_sum);







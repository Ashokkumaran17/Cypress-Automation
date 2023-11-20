var fruits=["Mango","Grapes","Orange","Watermelon","Apple"]
//display the Size of the string Array
console.log("Size of the String Array is:"+fruits.length);
//iterate the String Array
//diplay the array name and length of the array
for (let i=0;i<fruits.length;i++){
    console.log("String Arr element name is : "+fruits[i]+" and Element Length is: "+fruits[i].length);

}
//find the largest string and display the name
var max_str=fruits[0]
for (let i=0;i<fruits.length;i++){
    //console.log("String Arr element name is : "+fruits[i]+" and Element Length is: "+fruits[i].length);
    if(fruits[i]>max_str){
        max_str=fruits[i]
    }

}
console.log("largest String is: "+max_str+" and str length is: "+max_str.length)

//sort the String Array
console.log("Display the sort array String: ")
console.log(fruits.sort())

//Reverse the array
console.log("Reverse the String array: ")
console.log(fruits.reverse())

//Another method to make ascending order
console.log("Display the array String in Ascending : ")
console.log(fruits.sort((a,b)=>a-b))

//Another method to make decending order
console.log("Display the array String in decending : ")
console.log(fruits.reverse((a,b)=>b-a))








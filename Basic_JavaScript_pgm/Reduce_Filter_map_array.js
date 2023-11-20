//reduce method

var num = [5, 10, 15, 20, 25]
var sum = num.reduce(function (accumulator, curValue) {

    return accumulator + curValue

}, 0)

console.log("reduce output is: "+sum)

var sum2=num.reduce((accumulator, curValue) => accumulator + curValue, 0)
console.log("reduce output is: "+sum2)

//Filter method

var num = [1,2,3,4,5,6,7,8,9,10];

var even_num = num.filter(function(num){

    return num % 2 == 0; });
console.log("Even numbs are:");
console.log(even_num);

//Another method for filter
var arr_val = [1,2,3,4,5,6,7,8,9,10];
var num_filter_output=arr_val.filter(arr_val=>arr_val%2==0);
console.log("Even numbers are:");
console.log(num_filter_output);

//map method
var map_output=num_filter_output.map(num_filter_output=>num_filter_output*3)
//display the multiply with 3 output
console.log("Multiply with 3 output is:");
console.log(map_output);

//filter,map and  reduce combination
var output=num.filter(num=>num%2==0).map(num=>num*2).reduce((sum,val)=>sum+val,0)
console.log("output is:"+output);
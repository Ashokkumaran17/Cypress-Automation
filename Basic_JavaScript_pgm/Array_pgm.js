var marks = Array(6)
//new will create memory allocation
var marks =new Array(65,70,35,95,85,90)
//display the array
console.log("The arrays are:\n");
console.log(marks);

//display the length of the array
console.log("Array length is: "+ marks.length);
//reassign the array with index
marks[1]=75
//display the array
console.log("The arrays are:\n");
console.log(marks);

//add the array val at the end of the array
marks.push(100)
//display the array
console.log("The arrays are:\n");
console.log(marks);

//delete the array at the end of array
marks.pop()
//display the array
console.log("The arrays are:\n");
console.log(marks);

//Add the element at the begin
marks.unshift(45)
//display the array
console.log("The arrays are:\n");
console.log(marks);

//display the index val from the present element
console.log("The index val is:"+marks.indexOf(95));

//Find the largest element from the array
var max_element=marks[0]
for(let i=0;i<marks.length;i++){
    if(marks[i]>max_element){
        max_element=marks[i]

    }
}
console.log("max element is:"+max_element)

//Find the largest element from the array
var min_element=marks[0]
for(let i=0;i<marks.length;i++){
    if(marks[i]<min_element){
        min_element=marks[i]

    }
}
console.log("min element is:"+min_element)
var stu_marks =[45,50,95,85,70]
//create sub array from main arrays
console.log("subarray is:")
submarks =marks.slice(1,4)
//print the sub array
console.log(submarks)

//iterate the arrays
var sum_arr=0;
console.log("The arrays are:")
for(let i=0;i<stu_marks.length;i++){
    console.log(stu_marks[i])
    sum_arr+=stu_marks[i]
}
console.log("Array Sum is: "+ sum_arr)

let i =0;
console.log("i values are :");
while (i < 3) { // shows 0, then 1, then 2
    //alert( i );
    console.log(i);
    i++;

}
console.log("**********************************************************");
console.log("k values are :\n");
let k=1;
while ( k < 7) // shows 0, then 1, then 2
{
    if (k==5){
        break;
    }
    console.log(k);
    k++;
}

console.log("**********************************************************");
console.log("k values are :\n");
let j=1;
while ( j < 7) // shows 0, then 1, then 2
{

    j++;
    if (j==5){
        continue;
    }
    console.log(j);



}
/*
-Always Hungry---------------------------------------------------

Write a function that is given an array and each time 
the value is "food" it should console log "yummy". If 
"food" was not present in the array console log "I'm hungry" once.

*/

function alwaysHungry(arr) {
    // your code here 
    count = 0;
    for (a = 0; a < arr.length; a++){
        if (arr[a] == "food"){
            console.log("yummy");
            count++;
        }
    };
    if (count == 0){
        console.log("I'm Hungry")
    }
};
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

/*
-High Pass Filter---------------------------------------------------

Given an array and a value cutoff, 
return a new array containing only the values larger than cutoff.

*/

function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for (a = 0; a < arr.length; a++){
        if (arr[a] > cutoff){
            filteredArr.push(arr[a]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

/*
-Better than average---------------------------------------------------

Given an array of numbers return a count of how many of the numbers 
are larger than the average.

*/

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    var count = 0
    // count how many values are greater than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

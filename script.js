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

let myArray = [34, 2, 23, 67, 100, 5];
let myStringArray = ["banana", "apple", "orange", "mango", "grape"];


function arraySort(arr){
    // Check if the input is an array
    // Sort the array in natural sorting order
    // Should show 2 different sorting methods
    // dont use return
    if (!Array.isArray(arr))console.log("Input is not an array");

    if (typeof arr[0] === "number"){ // Numeric sort
        arr.sort((a,b) => a-b);
    }else{ //String sort
        arr.sort();
    }
}


arraySort(myArray);
console.log(myArray);
arraySort(myStringArray);
console.log(myStringArray);

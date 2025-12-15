function arraySort(arr){
    // Check if the input is an array and sort the array in natural sorting order
    // Should show 2 different sorting methods and dont use return
    if (!Array.isArray(arr))console.log("Input is not an array");

    if (typeof arr[0] === "number"){ // Numeric sort
        arr.sort((a,b) => a-b);
    }else{ //String sort
        arr.sort();
    }
}
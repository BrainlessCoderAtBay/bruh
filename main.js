
function arraySort(arr){
    // Check if the input is an array and sort the array in natural sorting order
    // Should show 2 different sorting methods and dont use return
    // Cant use arr.sort(). Manually_implement sorting logic
    if (!Array.isArray(arr))console.log("Input is not an array");

    if (typeof arr[0] === "number"){ // Numeric sort
        for (let i = 0; i < arr.length - 1; i++){
            for (let j = 0; j < arr.length - i - 1; j++){
                if (arr[j] > arr[j + 1]){
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }else{ //String sort
        for (let i = 0; i < arr.length - 1; i++){
            for (let j = 0; j < arr.length - i - 1; j++){
                if (arr[j].localeCompare(arr[j + 1]) > 0){
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}
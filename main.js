function arraySort(arr) {
    // Check if input is an array
    if (!Array.isArray(arr)) {
        console.log("Input is not an array");
        return;
    }

    // Single sorting method for numbers and strings
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    // No return as requested
}
function sortNumbers(arr) {
    // Create a copy of the array to avoid mutating the original array
    let sortedArr = arr.slice();
    
    // Get the length of the array
    let n = sortedArr.length;

    // Bubble sort algorithm
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                // Swap the elements
                let temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
        }
    }

    // Return the sorted array
    return sortedArr;
}

// Example usage:
const numbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers);  // Output: [1, 2, 3, 5, 8]
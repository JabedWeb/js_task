// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.


let arr = [7, 2, 3, 4, 5, 6, 7, 8, 9];

function secondSmallest(arr) {
    let smallest = arr[0];
    let secondSmallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest) {
            secondSmallest = arr[i];
        }
    }
    return secondSmallest;
}

console.log(secondSmallest(arr));
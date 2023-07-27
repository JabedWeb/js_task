// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3


let arr = [3, 5, 2, 5, 3, 3, 1, 4, 5];

function mostFrequent(arr) {
    let count = 0;
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        let tempCount = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                tempCount++;
            }
        }
        if (tempCount > count) {
            count = tempCount;
            num = arr[i];
        }
    }
    return num;
}

console.log(mostFrequent(arr));

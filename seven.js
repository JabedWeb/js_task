// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

// Example Input: "XXII" Example Output: 22
let roman = 'XXII';

function romanToInteger(roman) {
    let result = 0;
    let romanNum = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100
    }
    for (let i = 0; i < roman.length; i++) {
        if (romanNum[roman[i]] < romanNum[roman[i + 1]]) {
            result -= romanNum[roman[i]];
        } else {
            result += romanNum[roman[i]];
        }
    }
    return result;
}

console.log(romanToInteger(roman));
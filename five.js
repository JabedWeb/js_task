// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

// Example Input: calculator(2, 3, '+') Example Output: 5

let num1 = 2;
let num2 = 3;
let operator = '+';

function calculator(num1, num2, operator) {
    let result = 0;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }
    return result;
}

console.log(calculator(num1, num2, operator));
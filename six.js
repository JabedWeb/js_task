// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

// Example Input: 15 Example Output: 'a&bF4*V92@pZb'

let length = 15;

function randomPassword(length) {
    //must have uppercase letter
    //must have lowercase letter
    //must have number
    //must have special character

    let password = '';
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let number = '0123456789';
    let special = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let characters = uppercase + lowercase + number + special;
    
}
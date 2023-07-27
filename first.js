// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// Example Input: "hello world" Example Output: "dlrow olleh"



let str = "hello world";

let revers_string=string_reverse(str);

function string_reverse(str)
{
    let reverse_str="";
    for(let i=str.length-1;i>=0;i--)
    {
        reverse_str+=str[i];
    }
    return reverse_str;
}

console.log(revers_string);

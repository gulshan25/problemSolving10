"use strict";

// 1. Print all even numbers from 0 – 10

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
debugger;
const length = numbers.length; // length = showing errors in text editor.
for (let i = 0; i < length; i++) {
    // i = showing errors in text editor
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 8. Remove the spaces found in a string

let txt = "  Good Morning   ";
let result = txt.trim();

console.log(result);

// 5. Create a function that reverses an array

const players = ["sakib", "tamim", "rubel", "dhoni", "meshi"];

players.reverse();

console.log(players);

// 10. Return the number of vowels in a string

const vowels = ["a", "e", "i", "o", "u"];
debugger;
// const length = vowels.length; // length = showing errors in text editor.
for (x = 0; x < vowels.length; x++) {
    // i = showing errors in text editor
    console.log(x);
}

// 7. Create a function that filters out negative numbers

const number = [10, 5, 15, 35, 55, 65]; // numbers = showing errors in text editor.

function myFunction(value, index, array) {
    return value > 10;
}

const newNumbers = number.filter(myFunction);

console.log(newNumbers);

// 9. Return a Boolean if a number is divisible by 10

let x = 10 / "Hello";
Boolean(x);

// 4. Calculate the sum of numbers within an array

let sumNumbers = [-10, 5, -20, 15, -30, 35, 55, 65]; // numbers = showing errors in text editor.

function sorts(a, b) {
    return a - b;
}

console.log(sumNumbers.sort(sorts));

// 6. Sort an array from lowest to highest

const sortNumbers = [60, 70, 30, 40, 50, 80, 90, 100];

sortNumbers.sort();

console.log(sortNumbers);
// 1. Print all even numbers from 0 – 10

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 8. Remove the spaces found in a string

let txt = "  Good Morning   ";
let result = txt.trim();

console.log(result);

// 5. Create a function that reverses an array

const players = ["sakib", "tamim", "rubel", "dhoni"];

players.reverse();

console.log(players);
/*
Day 1 - Variables
Exercise: 06.undefined-type

Instructions:
- Run this file with Node.js: node "06.undefined-type.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


let name; // not defined so the value is undefined
let age = undefined; // explicitly assign undefined value

console.log(name);
console.log(name === age); // These are equal

name = 'Peter'; // you could assign a value later

console.log(name);

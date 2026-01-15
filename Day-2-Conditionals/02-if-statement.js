/*
Day 2 - Conditionals
Exercise: 02.if-statement

Instructions:
- Run this file with Node.js: node "02.if-statement.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


let input = [
  '25',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let age = +gets();
let under30 = false;

if (age < 30) {
  under30 = true;
}

console.log('Age is under 30: ' + under30);
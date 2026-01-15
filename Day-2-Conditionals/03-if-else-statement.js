/*
Day 2 - Conditionals
Exercise: 03.if-else-statement

Instructions:
- Run this file with Node.js: node "03.if-else-statement.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


let input = [
  '7',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = +gets();

if (number % 2 === 0) {
  console.log('This number is even.');
} else {
  console.log('This number is odd.');
}
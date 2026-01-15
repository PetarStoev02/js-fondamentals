/*
Day 2 - Conditionals
Exercise: 05.nested-if

Instructions:
- Run this file with Node.js: node "05.nested-if.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


let input = [
  '13',
  '17'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let first = +gets();
let second = +gets();

if (first === second) {
  console.log('This two numbers are equal.');
} else {
  if (first > second) {
    console.log('The first number is greater than the second.');
  } else {
    console.log('The second number is greater than the first.');
  }
}
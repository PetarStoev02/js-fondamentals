/*
Day 1 - Variables
Exercise: 11.increment-decrement

Instructions:
- Run this file with Node.js: node "11.increment-decrement.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


let counter = 0;

// this will output 0 because the postfix operator will increment after the operation is performed 
console.log(counter++);

// the counter is already incremented with one
console.log(counter);

// this will output 2 because the prefix operator will increment before the operation is performed
console.log(++counter);

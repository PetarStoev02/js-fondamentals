/*
Day 1 - Variables
Exercise: 05.boolean-type

Instructions:
- Run this file with Node.js: node "05.boolean-type.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


let n1 = 25;
let n2 = 30;

let greater = n1 > n2;

console.log('n1 = ' + n1 + ' is the greater number: ' + greater);

// parsing to boolean

let zeroToBoolean = Boolean(0);
let twoToBoolean = Boolean(2);
let emptyStringToBoolean = Boolean('');

console.log('zeroToBoolean: ', zeroToBoolean);
console.log('twoToBoolean: ', twoToBoolean);
console.log('emptyStringToBoolean: ', emptyStringToBoolean);

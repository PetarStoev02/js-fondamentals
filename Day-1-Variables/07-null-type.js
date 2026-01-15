/*
Day 1 - Variables
Exercise: 07.null-type

Instructions:
- Run this file with Node.js: node "07.null-type.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


let name;
let address = null;
let workplace = 'Telerik Academy';

console.log(name === address); // not the same. undefined and null are different things

// undefined is a variable not defined
// null is a missing value (not exactly but let's say it is)
console.log(workplace);

workplace = null;
console.log(workplace);

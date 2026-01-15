/*
Day 2 - Conditionals
Exercise: 08. Multiplication Table

Instructions:
- Run this file with Node.js: node "08. Multiplication Table.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(n) {
  // {number} X {times} = {product}
  let times = 10;
  for (i = 1; i <= times; i++) {
    let product = n * i;
    console.log(`${n} X ${i} = ${product}`);
  }
}
solve(7);

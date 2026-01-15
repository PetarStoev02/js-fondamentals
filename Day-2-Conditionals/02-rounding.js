/*
Day 2 - Conditionals
Exercise: 02. Rounding

Instructions:
- Run this file with Node.js: node "02. Rounding.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(num1, num2) {
  if (num2 > 15) {
    num2 = 15;
  }
  num1 = num1.toFixed(num2)
  console.log(parseFloat(num1))
  
}
solve(3.1415926535897932384626433832795, 2);

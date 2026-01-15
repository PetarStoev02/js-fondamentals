/*
Day 2 - Conditionals
Exercise: 03. Division.

Instructions:
- Run this file with Node.js: node "03. Division..js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(n) {
  if (n % 10 == 0) {
    console.log("The number is divisible by 10");
  } else if (n % 7 == 0) {
    console.log("The number is divisible by 7");
  } else if (n % 6 == 0) {
    console.log("The number is divisible by 6");
  } else if (n % 3 == 0) {
    console.log("The number is divisible by 3");
  } else if (n % 2 == 0) {
    console.log("The number is divisible by 2");
  } else {
    console.log("Not divisible");
  }
}
solve(15);

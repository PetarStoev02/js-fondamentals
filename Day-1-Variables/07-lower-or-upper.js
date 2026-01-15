/*
Day 1 - Variables
Exercise: 07. Lower or Upper

Instructions:
- Run this file with Node.js: node "07. Lower or Upper.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(string) {
  if (string == string.toUpperCase()) {
    console.log("upper-case");
  } else {
    console.log("lower-case");
  }
}
solve("L");

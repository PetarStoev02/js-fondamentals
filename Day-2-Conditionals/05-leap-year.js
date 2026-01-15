/*
Day 2 - Conditionals
Exercise: 05. Leap Year

Instructions:
- Run this file with Node.js: node "05. Leap Year.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(year) {
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
solve(400);

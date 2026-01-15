/*
Day 2 - Conditionals
Exercise: 07. Triangle Of Numbers

Instructions:
- Run this file with Node.js: node "07. Triangle Of Numbers.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(num) {
  for (let i = 1; i <= num; i++) {
    let line = ``;
    for (j = 1; j <= i; j++) {
      line += i + ` `;
    }
    console.log(line)
  }
}
solve(5);

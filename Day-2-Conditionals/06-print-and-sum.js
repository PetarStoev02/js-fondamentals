/*
Day 2 - Conditionals
Exercise: 06. Print And Sum

Instructions:
- Run this file with Node.js: node "06. Print And Sum.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(startNumber, endNumber) {
  let sum = 0;
  let line = ``;
  sum += startNumber;
  line += startNumber + " ";

  while (startNumber !== endNumber) {
    startNumber++;
    sum += startNumber;
    line += startNumber + " ";
  }
  console.log(line);
  console.log(`Sum: ${sum}`);
}
solve(5, 10);

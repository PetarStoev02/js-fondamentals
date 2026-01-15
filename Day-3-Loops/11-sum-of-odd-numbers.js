/*
Day 3 - Loops
Exercise: 11. Sum of Odd Numbers

Instructions:
- Run this file with Node.js: node "11. Sum of Odd Numbers.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(num) {
  let sum = 0;
  let flag = 0;
  for (let i = 1; flag < num; i++) {
    if (i % 2 == 1) {
      console.log(i);
      sum += i;
      flag += 1;
    }
  }
  console.log(`Sum: ${sum}`);
}
solve(5);

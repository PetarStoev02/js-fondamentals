/*
Day 5 - Arrays
Exercise: 05. Sum Even Numbers

Instructions:
- Run this file with Node.js: node "05. Sum Even Numbers.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (Number(arr[i]) % 2 === 0) {
      sum += Number(arr[i]);
    }
  }
  console.log(sum);
}
solve(["1", "2", "3", "4", "5", "6"]);

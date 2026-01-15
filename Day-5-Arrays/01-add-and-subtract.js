/*
Day 5 - Arrays
Exercise: 01. Add and Subtract

Instructions:
- Run this file with Node.js: node "01. Add and Subtract.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(arr) {
  let sum = 0;
  let modSum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] % 2 === 0) {
      arr[i] += i;
      modSum += arr[i];
    } else if (arr[i] % 2 === 1||arr[i] % 2 === -1) {
      arr[i] -= i;
      modSum += arr[i];
    }
  }
  console.log(arr)
  console.log(sum)
  console.log(modSum)
}
solve([-5, 11, 3, 0, 2]);

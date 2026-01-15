/*
Day 5 - Arrays
Exercise: 03. Reverse an Array of Numbers

Instructions:
- Run this file with Node.js: node "03. Reverse an Array of Numbers.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(n, arr) {
  let newArr = [];
  for (i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  newArr.reverse();

  let result = "";
  for (i = 0; i < newArr.length; i++) {
    result += newArr[i] + " ";
  }
  console.log(result);
}
solve(3, [10, 20, 30, 40, 50]);

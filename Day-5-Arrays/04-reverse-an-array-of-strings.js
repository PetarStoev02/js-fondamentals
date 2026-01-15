/*
Day 5 - Arrays
Exercise: 04. Reverse an Array of Strings

Instructions:
- Run this file with Node.js: node "04. Reverse an Array of Strings.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(arr) {
  arr.reverse();
  let output = "";
  for (i = 0; i < arr.length; i++) {
    output += arr[i] + " ";
  }
  console.log(output);
}
solve(['33', '123', '0', 'dd']);

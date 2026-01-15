/*
Day 5 - Arrays
Exercise: 04. Array Rotation

Instructions:
- Run this file with Node.js: node "04. Array Rotation.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(arr, n) {
  for (i = 0; i < n; i++) {
      const el= arr.shift()
      arr.push(el)
  }
  console.log(arr.join(" "))
}
solve([51, 47, 32, 61, 21], 2);

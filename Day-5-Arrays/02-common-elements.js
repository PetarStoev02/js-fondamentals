/*
Day 5 - Arrays
Exercise: 02. Common Elements

Instructions:
- Run this file with Node.js: node "02. Common Elements.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      console.log(arr1[i]);
    }
  }
}
solve(["S", "o", "f", "t", "U", "n", "i", " "], ["s", "o", "c", "i", "a", "l"]);

/*
Day 5 - Arrays
Exercise: 03. Merge Arrays

Instructions:
- Run this file with Node.js: node "03. Merge Arrays.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      let sum = Number(arr1[i]) + Number(arr2[i]);
      newArr.push(sum);
    } else if (i % 2 === 1) {
      newArr.push(arr1[i] + arr2[i]);
    }
  }
  console.log(newArr.join(" - "))
}
solve(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);

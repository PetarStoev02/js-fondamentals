/*
Day 5 - Arrays
Exercise: 05. Max Number

Instructions:
- Run this file with Node.js: node "05. Max Number.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(arr) {
  let newArr = [];

  for (i = 0; i < arr.length; i++) {
    let isBigger = true;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        isBigger = false;
        break;
      }
    }
    if (isBigger) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.join(" "));
}
solve([41, 41, 34, 20]);

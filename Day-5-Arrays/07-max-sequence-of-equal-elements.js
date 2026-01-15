/*
Day 5 - Arrays
Exercise: 07. Max Sequence of Equal Elements

Instructions:
- Run this file with Node.js: node "07. Max Sequence of Equal Elements.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let curentResult = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        curentResult.push(arr[j]);
      } else {
        break;
      }
    }
    if (result.length < curentResult.length) {
      result = curentResult;
    }
  }
  console.log(result.join(" "));
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

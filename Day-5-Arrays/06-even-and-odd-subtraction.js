/*
Day 5 - Arrays
Exercise: 06. Even and Odd Subtraction

Instructions:
- Run this file with Node.js: node "06. Even and Odd Subtraction.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(arr) {
  let sumOdd = 0;
  let sumEven = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) % 2 === 0) {
      sumEven += Number(arr[i]);
    } else {
      sumOdd += Number(arr[i]);
    }
  }
  console.log(sumEven - sumOdd);
}
solve([1, 2, 3, 4, 5, 6]);

/*
Day 5 - Arrays
Exercise: 08. Magic Sum

Instructions:
- Run this file with Node.js: node "08. Magic Sum.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(array, n) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (Number(array[i]) + Number(array[j]) === n) {
        console.log(`${array[i]} ${array[j]}`);
      }
    }
  }
}
solve([1, 2, 3, 4, 5, 6],
    6);

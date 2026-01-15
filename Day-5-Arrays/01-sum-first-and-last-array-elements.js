/*
Day 5 - Arrays
Exercise: 01. Sum First and Last Array Elements

Instructions:
- Run this file with Node.js: node "01. Sum First and Last Array Elements.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(arr){
let first= arr[0]
let last= arr[arr.length -1]
console.log(first+last)
}
solve([20, 30, 40])
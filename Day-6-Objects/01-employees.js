/*
Day 6 - Objects
Exercise: 01. Employees

Instructions:
- Run this file with Node.js: node "01. Employees.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(arr) {
  for (const line of arr) {
    let number = 0;
    let names = {};
    names.curentName=line
    number += line.length;
   
    console.log(`Name: ${names.curentName} -- Personal Number: ${number}`);
  }
}
solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);

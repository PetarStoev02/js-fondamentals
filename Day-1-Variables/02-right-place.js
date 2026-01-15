/*
Day 1 - Variables
Exercise: 02. Right Place

Instructions:
- Run this file with Node.js: node "02. Right Place.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(stringOne, char, stringTwo) {
  let word = stringOne.replace("_", char);
  let match = word == stringTwo ? "Matched" : "Not Matched";

  console.log(match);
}
solve("Str_ng", "I", "Strong");

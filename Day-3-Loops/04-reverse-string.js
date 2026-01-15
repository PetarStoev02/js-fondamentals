/*
Day 3 - Loops
Exercise: 04. Reverse String

Instructions:
- Run this file with Node.js: node "04. Reverse String.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(string) {
  string = string.toString();
  let reverseString = string.split("").reverse().join("");

  console.log(reverseString);
}
solve("Hello");

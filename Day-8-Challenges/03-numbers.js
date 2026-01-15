/*
Day 8 - Challenges
Exercise: 03. Numbers

Instructions:
- Run this file with Node.js: node "03. Numbers.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(string) {
  let arr = string.split(" ").map(Number);
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  let avaragre = total / arr.length;
  let greater = arr.filter((x) => x > avaragre);
  greater.sort((a, b) => b - a);
  if (greater.length == 0) {
    console.log("No");
  } else {
    console.log(greater.slice(0, 5).join(" "));
  }
}
solve("1,2");

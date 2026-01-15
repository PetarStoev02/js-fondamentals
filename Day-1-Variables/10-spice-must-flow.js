/*
Day 1 - Variables
Exercise: 10. Spice Must Flow

Instructions:
- Run this file with Node.js: node "10. Spice Must Flow.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(startYield) {
  let totalSpice = 0;
  let totalDays = 0;
  let crew = 26;
  while (startYield >= 100) {
    totalSpice += startYield - crew;
    startYield -= 10;
    totalDays++;
  }
  totalSpice -= crew;
  console.log(totalDays);
  console.log(totalDays === 0 ? 0 : totalSpice);
}
solve(111);

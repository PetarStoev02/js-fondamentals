/*
Day 3 - Loops
Exercise: 03. Next Day

Instructions:
- Run this file with Node.js: node "03. Next Day.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(year, month, day) {
  
  let thisDay = new Date(year, month, day);

  console.log(
    `${thisDay.getFullYear()}-${thisDay.getMonth()}-${thisDay.getDate()}`
  );
}
solve(1951,12, 24);

/*
Day 8 - Challenges
Exercise: 01. SoftUni Reception

Instructions:
- Run this file with Node.js: node "01. SoftUni Reception.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(arr) {
    let [emp1,emp2,emp3,people]=arr.map(Number)
  let hours = 0;
  while (people> 0) {
    hours++;
    if (hours % 4 === 0) {
        people-= 0;
    } else {
        people -=emp1+emp2+emp3;
    }
  }
  console.log(`Time needed: ${hours}h.`);
}
solve(['5','6','4','20']);

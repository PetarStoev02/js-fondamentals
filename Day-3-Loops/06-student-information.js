/*
Day 3 - Loops
Exercise: 06. Student Information

Instructions:
- Run this file with Node.js: node "06. Student Information.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(name, age, grade) {
  let studentName = name;
  let studentAge = Number(age);
  let avarageGrade = Number(grade);

  console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${avarageGrade.toFixed(2)}`);
}
solve("John", 15, 5.54678);

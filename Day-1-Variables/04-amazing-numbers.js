/*
Day 1 - Variables
Exercise: 04. Amazing Numbers

Instructions:
- Run this file with Node.js: node "04. Amazing Numbers.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function numbers(num) {
  num = num.toString();
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  let result = sum.toString().includes("9");
  console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
}
numbers(1233);

/*
Day 1 - Variables
Exercise: 08. Calculator

Instructions:
- Run this file with Node.js: node "08. Calculator.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solev(num1, operator, num2) {
  let sum = 0;
  if (operator === "+") {
    sum += num1 + num2;
  } else if(operator === "*"){
    sum += num1 * num2;
  }else if(operator === "-"){
    sum += num1 - num2;
  }else if(operator === "/"){
    sum += num1 / num2;
  }
  console.log(sum.toFixed(2));
}
solev(25.5,
    '',3);

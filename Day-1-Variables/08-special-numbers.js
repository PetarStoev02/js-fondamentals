/*
Day 1 - Variables
Exercise: 08. Special Numbers

Instructions:
- Run this file with Node.js: node "08. Special Numbers.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function numbers(num) {
  let sum = 0;
  let result = "";
  for (let i = 1; i <= num; i++) {
    i = i.toString();
    for (let j = 0; j < i.length; j++) {
      sum += Number(i[j]);
    }
    result = sum === 5 || sum === 7 || sum === 11;
    console.log(result ? `${i} -> True` : `${i} -> False`);
    sum = 0;
  }
}

numbers(15);

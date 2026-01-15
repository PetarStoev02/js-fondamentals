/*
Day 3 - Loops
Exercise: 01. Sort Numbers

Instructions:
- Run this file with Node.js: node "01. Sort Numbers.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function soplve(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1);
    if (num2 > num3) {
      console.log(num2);
      console.log(num1);
    } else {
      console.log(num3);
      console.log(num2);
    }
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2);
    if (num1 > num3) {
      console.log(num1);
      console.log(num3);
    } else {
      console.log(num3);
      console.log(num1);
    }
  } else if (num3 > num1 && num3 > num1) {
    console.log(num3);
    if (num2 > num1) {
      console.log(num2);
      console.log(num1);
    } else {
      console.log(num1);
      console.log(num2);
    }
  }
}
soplve(-2, 1, 3);

/*
Day 1 - Variables
Exercise: 01. Sum Digits

Instructions:
- Run this file with Node.js: node "01. Sum Digits.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(num) {
    num = num.toString();
    let sum = 0;
    for(i=0;i<num.length;i++){
sum+=Number(num[i])
    }
    console.log(sum)
}
solve(245678);

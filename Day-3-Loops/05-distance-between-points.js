/*
Day 3 - Loops
Exercise: 05. Distance between Points

Instructions:
- Run this file with Node.js: node "05. Distance between Points.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(x1, y1, x2, y2){
    let a= x1*y1
    let b= x2*y2
    let d =Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) )
    console.log(d)

}solve(2, 4, 5, 0)
/*
Day 1 - Variables
Exercise: 07. Centuries to Minutes

Instructions:
- Run this file with Node.js: node "07. Centuries to Minutes.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function century(num){
    let century=num
    let year=century*100
    let days=Math.trunc(year*365.2422)
    let hours=days*24
    let minutes=hours*60
    
console.log(`${century} centuries = ${year} years = ${days} days = ${hours} hours = ${minutes} minutes`)
}
century(1)
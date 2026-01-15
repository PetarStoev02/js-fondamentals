/*
Day 1 - Variables
Exercise: 03. Integer and Float

Instructions:
- Run this file with Node.js: node "03. Integer and Float.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function integer(n1,n2,n3){
let sum=n1+n2+n3
sum%1==0
if(sum%1==0){
    console.log(`${sum} - Integer`)
}else{
    console.log(`${sum} - Float`)
}
}
integer(100, 200, 303)
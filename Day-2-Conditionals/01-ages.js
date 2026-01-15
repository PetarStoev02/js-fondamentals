/*
Day 2 - Conditionals
Exercise: 01. Ages

Instructions:
- Run this file with Node.js: node "01. Ages.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function sovle(num){
    if(num>=0&&num<=2){
        console.log("baby")
    }else if(num>=3&&num<=13){
        console.log("child")
    }else if(num>=14&&num<=19){
        console.log("teenager")
    }else if(num>=20&&num<=65){
        console.log("adult")
    }else if(num>=66){
        console.log("elder")
    }else{
        console.log("out of bounds")
    }

}
sovle(100)
/*
Day 3 - Loops
Exercise: 08. Foreign Languages

Instructions:
- Run this file with Node.js: node "08. Foreign Languages.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(country) {
  let flag=0
  switch (country) {
    case "England":
      console.log("English");
      flag+=1
      break;
    case "USA":
      console.log("English");
      flag+=1
      break;
    case "Spain":
      console.log("Spanish");
      flag+=1
      break;
    case "Argentina":
      console.log("Spanish");
      flag+=1
      break;
    case "Mexico":
      console.log("Spanish");
      flag+=1
      break;
  }
  if (flag<1) {
    console.log("unknown");
  }
}
solve("England");

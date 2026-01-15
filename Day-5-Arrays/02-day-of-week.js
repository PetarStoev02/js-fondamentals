/*
Day 5 - Arrays
Exercise: 02. Day of Week

Instructions:
- Run this file with Node.js: node "02. Day of Week.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function days(day) {
  let week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (day >= 1 && day <= 7) {
    console.log(week[day - 1]);
  } else {
    console.log("Invalid day!");
  }
}
days(3);

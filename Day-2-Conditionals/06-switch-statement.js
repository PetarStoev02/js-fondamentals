/*
Day 2 - Conditionals
Exercise: 06.switch-statement

Instructions:
- Run this file with Node.js: node "06.switch-statement.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


let input = [
  '6',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let day = +gets();

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;

  default:
    console.log('Invalid day');
    break;
}
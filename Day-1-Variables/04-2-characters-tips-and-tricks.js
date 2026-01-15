/*
Day 1 - Variables
Exercise: 04.2.characters-tips&tricks

Instructions:
- Run this file with Node.js: node "04.2.characters-tips&tricks.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


let divider = '-';

let line = divider.repeat(20);

// https://www.asciitable.com/
// The ASCII table represents each symbol in the computer
// It matches a number to a character nd could do it both ways
// 40 -> (
// 112 -> p

// If you want to you could find a difference between two characters

let diff = 'y'.charCodeAt(0) - 's'.charCodeAt(0);
console.log(diff);

// How we could return it back to a symbol

let char = String.fromCharCode(diff); // This will point to a certain character in the ASCII table and possibly won't be output on the console
console.log(char); // 6 -> acknowledge

// How to find the letter in the alphabet 

let letter = String.fromCharCode(diff + 96); // 97 is the code of 'a' so we could add 96
console.log(letter);

// Solution
// y -> 25
// s -> 19
// y - s = 6
// 6 -> f




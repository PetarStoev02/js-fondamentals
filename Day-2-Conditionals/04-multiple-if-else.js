/*
Day 2 - Conditionals
Exercise: 04.multiple-if-else

Instructions:
- Run this file with Node.js: node "04.multiple-if-else.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


let input = [
  'U',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let letter = gets().toLowerCase();

if (letter === 'a') {
  console.log('Vowel [ei]');
} else if (letter === 'e') {
  console.log('Vowel [i:]');
} else if (letter === 'i') {
  console.log('Vowel [ai]');
} else if (letter === 'o') {
  console.log('Vowel [ou]');
} else if (letter === 'u') {
  console.log('Vowel [ju:]');
} else {
  console.log('Consonant');
}
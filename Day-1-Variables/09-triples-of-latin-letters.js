/*
Day 1 - Variables
Exercise: 09. Triples of Latin Letters

Instructions:
- Run this file with Node.js: node "09. Triples of Latin Letters.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(n) {
  let latter = String.fromCharCode(97 + n);
  for (i = 0; i <= n; i++) {
    let latterI = String.fromCharCode(97 + i);
    for (j = 0; j <= n; j++) {
      let latterJ = String.fromCharCode(97 + j);
      for (k = 0; k <= n; k++) {
        let latterk = String.fromCharCode(97 + k);
        if (k !=n&&i !=n&&j!=n) {
          console.log(`${latterI}${latterJ}${latterk}`);
        }
      }
    }
  }
}
solve(3);

/*
Day 1 - Variables
Exercise: 09. Gladiator Expenses

Instructions:
- Run this file with Node.js: node "09. Gladiator Expenses.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  let yearCost = 0;
  let flag = 0;
  for (i = 1; i <= lostFights; i++) {
    if (i % 2 == 0) {
      yearCost += helmetPrice;
      if (i % 2 == 0 && i % 3 == 0) {
        yearCost += shieldPrice;
        yearCost += swordPrice;
        flag++;
        if (flag % 2 == 0) {
          yearCost += armorPrice;
        }
      }
    } else if (i % 3 == 0) {
      yearCost += swordPrice;
    }
  }
  console.log(`Gladiator expenses: ${yearCost.toFixed(2)} aureus`)
}

solve(7, 2, 3, 4, 5);

/*
Day 7 - Regular Expressions
Exercise: 01. Furniture

Instructions:
- Run this file with Node.js: node "01. Furniture.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(input) {
  let total = 0;
  let result = "Bought furniture:\n";
  for (const line of input) {
    let regex = />>(?<name>[A-Za-z]+)<<(?<prize>[\d]+(\.[\d]+)?)!(?<quantity>[\d]+)/g;
    let match = regex.exec(line);
    if (match) {
      result += match.groups.name + "\n";
      total += Number(match.groups.prize) * Number(match.groups.quantity);
    }
  }
  result+=`Total money spend: ${total.toFixed(2)}`
    console.log(result);
}
solve([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);

/*
Day 5 - Arrays
Exercise: 08. Condense Array to Number

Instructions:
- Run this file with Node.js: node "08. Condense Array to Number.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(nums){
    while (nums.length > 1) {
        let condensed = Array(nums.length-1);
        for (let i = 0; i < nums.length - 1; i++) {
            condensed[i] = Number(nums[i]) + Number(nums[i + 1]);
        }
        nums = condensed;
    }
    console.log(nums[0])
}
solve([5,0,4,1,2])
/*
Day 4 - Functions
Exercise: 06 - Function Scope

Instructions:
- Run this file with Node.js: node "06-function-scope.js"
- Understand the difference between local and global scope
- Fix the code below so it works correctly

Hint: Variables declared inside a function are only accessible inside that function
*/

// Global variable
let message = "Hello from global scope!";

function showMessage() {
    // Local variable - only exists inside this function
    let localMessage = "Hello from local scope!";
    console.log(message);       // Can access global variable
    console.log(localMessage);  // Can access local variable
}

showMessage();

// TODO: Uncomment the line below. What happens? Why?
// console.log(localMessage);

// TODO: Create a function called `counter` that:
// 1. Has a local variable `count` starting at 0
// 2. Increments count by 1
// 3. Returns the count value
// 4. Call it multiple times - what do you notice about the count?



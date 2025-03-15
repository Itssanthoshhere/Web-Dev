// ✅ FUNCTIONS IN JAVASCRIPT
console.log("Hello, I'm learning functions!");

/*
📌 Functions:
  - A block of code that performs a task.
  - Reusable to avoid repetition (DRY principle).
  - Can take **parameters** and **return** values.

  ✅ FUNCTION DECLARATION - defining a function.
  ✅ FUNCTION CALL - executing the function.
*/

// 📌 FUNCTION DECLARATION
function square(number) {
    return number * number;
}

// 📌 FUNCTION CALL
const result = square(5);
console.log("Square of 5:", result); // Output: 25


// 📌 Function with a parameter
function greet(name) {
    console.log(`Hey ${name}, good to meet you!`);
    console.log(`Hey ${name}, Welcome to Greater Noida!`);
}

greet("Sam");


// 📌 Function with multiple parameters
function sum(a, b) {
    return a + b;
}

let result1 = sum(6, 4);
let result2 = sum(9, 5);
let result3 = sum(2, 16);

console.log("The sum is:", result1); // Output: 10
console.log("The sum is:", result2); // Output: 14
console.log("The sum is:", result3); // Output: 18


// 📌 Function with Default Parameters
function sumWithDefault(a, b, c = 10) {
    return a + b + c;
}

let total = sumWithDefault(15, 5);
console.log("The sum with default parameter is:", total); // Output: 30


// 📌 Function with Missing Arguments
function sumWithDefault2(m, n, l = 15) {
    console.log("Values:", m, n, l);
    return m + (n || 0) + l; // Ensure n is not undefined
}

let total1 = sumWithDefault2(15);
console.log("The sum with missing parameters is:", total1);


/* 
📌 FUNCTION EXPRESSIONS
  - Assigning a function to a variable.
  - The function is **anonymous** (without a name).
*/
const add = function (a, b) {
    return a + b;
};

console.log("Addition using function expression:", add(3, 7)); // Output: 10


/*
📌 ARROW FUNCTIONS
  - More concise function syntax.
*/

// Standard arrow function
const square1 = (number) => {
    return number * number;
};
console.log("Arrow function result:", square1(10)); // Output: 100

// Implicit return (Shorter syntax)
const square2 = (number) => number * number;
console.log("Shorter arrow function result:", square2(10)); // Output: 100


/*
📌 FUNCTION RETURNING UNDEFINED
  - Code after `return` is ignored.
*/
function test() {
    console.log(1);
    return true; // Execution stops here
    console.log(2); // This line will NOT execute
    return false;
    console.log(3); // This line will NOT execute
}

const bool = test();
console.log("Function returns:", bool); // Output: true

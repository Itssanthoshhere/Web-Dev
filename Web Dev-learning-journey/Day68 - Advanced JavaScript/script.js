console.log("Script.js initializing!!"); // Logs the initialization of the script

// 🟢 IIFE (Immediately Invoked Function Expression) & Async/Await Example
async function sleep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(45); // Resolves with value 45 after 1 second
        }, 1000);
    });
}

(async function main() {
    // 🟢 Awaiting asynchronous function execution
    let a = await sleep();
    console.log(a); // 45

    let b = await sleep();
    console.log(b); // 45

    // 🟢 Array Destructuring
    let [x, y] = [1, 5];
    console.log(x, y); // 1 5

    let [c, d] = [4, 6, 9]; // Third element (9) is ignored
    console.log(c, d); // 4 6

    let [x1, y1, ...rest] = [1, 5, 7, 8, 9, 10]; // Rest operator collects remaining elements
    console.log(x1, y1, rest); // 1 5 [7, 8, 9, 10]

    let [x2, y2, ...remaining] = [1, 5, 7, 8, 9, 10];
    console.log(x2, y2, remaining); // 1 5 [7, 8, 9, 10]

    // 🟢 Object Destructuring
    let obj = {
        a1: 1,
        b1: 2,
        c1: 3,
    };

    let { a1, b1 } = obj; // Extracts a1 and b1 from obj
    console.log(a1, b1); // 1 2
})();

// 🟢 Spread Operator
function sum(a, b, c) {
    return a + b + c; // Returns the sum of three numbers
}

let arr = [1, 4, 6];

console.log(arr[0] + arr[1] + arr[2]); // 11 (Without spread)
console.log(sum(arr[0], arr[1], arr[2])); // 11 (Without spread)
console.log(sum(...arr)); // 11 (Using spread operator)

// 🟢 Spread Operator in Objects
const arr1 = [1, 7, 11];
const obj1 = { ...arr1 }; // Converts array elements into object properties
console.log(obj1); // {0: 1, 1: 7, 2: 11}

const nums = [1, 7, 11];
console.log(sum(...nums)); // 19

// 🟢 Hoisting Example
console.log(hoistedFunction()); // Works due to function hoisting

function hoistedFunction() {
    return "This function is hoisted!"; // Function declaration is hoisted
}

// console.log(hoistedVar); // Uncommenting this will throw an error because variable hoisting does not hoist values
var hoistedVar = "I am hoisted!"; // Declaration is hoisted, but not the assigned value

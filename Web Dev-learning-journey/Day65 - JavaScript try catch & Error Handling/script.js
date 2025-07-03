console.log("Script.js initializing!!"); // Logs the initialization of the script

let a = prompt("Enter first number");
let b = prompt("Enter second number");

// Convert inputs to numbers
a = Number(a);
b = Number(b);

// Validate input
if (isNaN(a) || isNaN(b)) {
    throw new SyntaxError("Sorry, this is not allowed. Please enter numbers.");
}

// let sum = parseInt(a) + parseInt(b);
let sum = a + b;

// try-catch 
// try {
//     console.log("The sum is ", sum * x);
// } catch (error) {
//     console.log("Error Occurred!")
// }

// The error object
try {
    Hey; // Undefined variable (ReferenceError)
} catch (err) {
    alert("Error Name: " + err.name);
    alert("Error Message: " + err.message);
    alert("Error Stack: " + err.stack);
}

// The finally clause
function main() {
    let x = 1; // Ensure x is defined
    try {
        console.log("The sum is ", sum * x);
        return true;
    } catch (error) {
        console.log("Error occurred:", error.message);
        return false;
    } finally {
        console.log("Files are being closed and DB connection is being closed.");
    }
}

let c = main();

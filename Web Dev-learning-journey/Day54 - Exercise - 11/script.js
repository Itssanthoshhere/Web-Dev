/*  Exercise - 11 | Calculate the Factorial
    Write a program to calculate factorial of a number using reduce and using for loops
*/


// Taking user input and converting it to a number
let a = parseInt(prompt("Enter a number to calculate its factorial: "));

// Using 'reduce()'
function factorial(number) {
    if (number < 0) return "Factorial is not defined for negative numbers."; // Handle negative numbers

    if (number === 0) return 1; // Factorial of 0 is 1

    let arr = Array.from(Array(number + 1).keys());

    let c = arr.slice(1,).reduce((a, b) => {
        return a * b;
    })

    return c;
}

console.log("Factorial using reduce:", factorial(a));
alert("Factorial using reduce: " + factorial(a));


// Using 'for' loops
function facFor(number) {
    if (number < 0) return "Factorial is not defined for negative numbers."; // Handle negative numbers

    if (number === 0) return 1; // Factorial of 0 is 1

    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index; // Multiply each number from 1 to number
    }

    return fac;
}

console.log("Factorial using for loop:", facFor(a));
alert("Factorial using for loop: " + facFor(a));
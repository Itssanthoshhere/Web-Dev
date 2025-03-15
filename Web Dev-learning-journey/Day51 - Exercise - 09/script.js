/* Exercise - 09 | Faulty Calculator 
     Create a faulty calculator using JavaScript
     
  This faulty calculator does this following:
    1. It takes two numbers as input from the user
    2. It performs wrong operations as follows:
    
        +  --> -
        *  --> +
        -  --> /
        /  --> **

       This calculator performs incorrect operations 10% of the time.
*/

let random = Math.random(); // Generates a number between 0 and 1
console.log("Random Value:", random);

let a = Number(prompt("Enter first number: "));
let c = prompt("Enter operation (+, -, *, /): ");
let b = Number(prompt("Enter second number: "));

let faultyOperations = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
};

if (random > 0.1) {
    // ✅ Perform correct calculation 90% of the time
    let result = eval(`${a} ${c} ${b}`);
    console.log(`Correct result: ${a} ${c} ${b} = ${result}`);
    alert(`The result is: ${result}`);
}

else {
    // ❌ Perform incorrect calculation 10% of the time
    let wrongOp = faultyOperations[c] || c; // Default to correct op if not found
    let faultyResult = eval(`${a} ${wrongOp} ${b}`);
    console.log(`Faulty result: ${a} ${wrongOp} ${b} = ${faultyResult}`);
    alert(`The result is: ${faultyResult}`);
}

// ✅ CONDITIONAL STATEMENTS IN JAVASCRIPT
console.log("Hello, I'm learning conditional statements!");

// Declaring two variables
let age = 2;
let grace = 3;

// Performing basic arithmetic operations
console.log(age + grace);  // Addition
console.log(age - grace);  // Subtraction
console.log(age * grace);  // Multiplication
console.log(age / grace);  // Division
console.log(age ** grace); // Exponentiation (age^grace)
console.log(age % grace);  // Modulus (Remainder)

// ✅ IF-ELSE STATEMENT
if ((age + grace) < 18) {
    console.log("You can drive!");
} else {
    console.log("You can't drive!");
}

// Updating the 'age' variable
age += grace;
console.log(age);

// ✅ ANOTHER IF-ELSE EXAMPLE
let age1 = 18;

if (age1 == 18) {
    console.log("You can drive!");
} else {
    console.log("You can't drive!");
}

// ✅ COMPARISON OPERATORS (Return True/False)
const a = 5;
const b = 10;

// Strict equality (Checks both value & type)
console.log(a === b); // false

// Strict inequality
console.log(a !== b); // true

console.log(5 === 5); // true
console.log('Hello' === 'Hello'); // true

// Strict equality example
console.log(5 === "5"); // false (because different data types)

// Loose equality example (doesn't check type)
console.log(5 == "5"); // true (because it converts types)


// The Good Ones: === !==
// The Evil Twins: == !=


// ✅ LOOSE VS STRICT EQUALITY
console.log('' == '0'); // false
console.log(0 == '');   // true
console.log(0 == '0');  // true

console.log(false == 'false'); // false
console.log(false == '0'); // true

console.log(true == 1);  // true (because true is converted to 1)
console.log("5" == 5);   // true (string is converted to number)

// Strict equality comparison
console.log(true === 1); // false (since types are different)
console.log("5" === 5);  // false (string vs number)

// ✅ LOGICAL OPERATORS
// AND (&&) -> All conditions must be true
console.log(true && true);  // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true && true && true); // true
console.log(true && false && true); // false

// OR (||) -> At least one condition must be true
console.log(true || true);  // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(true || true || true); // true
console.log(true || false || true); // true

// NOT (!) -> Negates the value
console.log(!false); // true

// ✅ IF-ELSE IF-ELSE STATEMENT
/*
if (condition) {
    block of code
    }
*/

const age2 = 18;

if (age2 > 18) {
    console.log('You may enter!');
} else if (age2 === 18) {
    console.log('You just turned 18, Welcome!!');
} else {
    console.log('Grow up!');
}

// ✅ WHILE LOOP (Executes as long as condition is true)
let i = 0;
while (i < 10) {
    console.log(i);
    i++; // Increment i to avoid infinite loop
}

// ✅ FOR LOOP (Used when the number of iterations is known)
/*
for ([initialization]; [condition]; [final-expression];) {
    block of code
}
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}


/*
// DRY Code - Dont repeat yourself
console.log(1);
console.log(1);
console.log(1);
console.log(1);
*/


// ✅ TERNARY OPERATOR (Shortened if-else)
let m = 6;
let n = 8;
let c = m > n ? (m - n) : (n - m);

console.log(c);

/*
The ternary operator is equivalent to:
if (m > n) {
    let c = m - n;
} else {
    let c = n - m;    
}
*/



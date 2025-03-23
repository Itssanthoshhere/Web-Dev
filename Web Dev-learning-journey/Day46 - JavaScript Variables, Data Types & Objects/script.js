// Logs a message to the console
console.log("Hey there! I am a JavaScript file.");

// Declaring variables using 'var' (can be re-declared and updated)
var a = 5;      // Integer
var b = 6;      // Integer
var c = "string";  // String
var _d = "Sam";  // Valid variable name

// Invalid variable name (commented out to prevent error)
// var 55a = "Sandy";  // ❌ Variable names cannot start with a number

// Logs the sum of 'a' and 'b' (5 + 6 = 11)
console.log(a + b);

// Logs the data types of variables
console.log(typeof a, typeof b, typeof c); // number number string

{
    // Block scope (this 'a' would be different if 'let' was used)
    // let a = 66; // This would create a block-scoped variable
    console.log(a); // Since 'a' is declared with 'var', it is not block-scoped
}

// Logs 'a' again to show that 'var' is function-scoped
console.log(a);

// Attempting to reassign a constant (commented to prevent error)
// const a1 = 5;
// a1 = a1 + 1; // ❌ Error: Assignment to constant variable

// Declaring variables using 'let' and 'const'
let x = "Hello";  // String
let y = 2;        // Integer
let z = 3.55;     // Float
const p = true;   // Boolean
let q = null;     // Null (empty value)
let r = undefined; // Undefined (no value assigned)

// Logs the values of variables
console.log(x, y, z, p, q, r);

// Logs the data types of variables
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// Creating an object (JSON-like structure)
let o = {
    "name": "Sam",
    "job code": 1150,
    "is_handsome": true
};

// Logs the entire object
console.log(o);

// Adds a new property 'salary' to the object
o.salary = "100cr";  
console.log(o);

// Updates the 'salary' property
o.salary = "200cr";  
console.log(o);


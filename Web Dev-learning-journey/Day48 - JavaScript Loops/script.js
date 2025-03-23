// ✅ LOOPS IN JAVASCRIPT
console.log("Hello, I'm learning loops!");

/*
// DRY Code - Dont repeat yourself
console.log(1);
console.log(1);
console.log(1);
console.log(1);
*/

// ✅ FOR LOOP (Use when the number of iterations is known)
/*
for ([initialization]; [condition]; [final-expression]) {
    block of code
}
*/

for (let i = 0; i < 5; i++) {
    console.log(i); // Prints numbers 0 to 4
}

// ✅ FOR-IN LOOP (Used to iterate over object keys)
let obj = {
    name: "Sam",
    role: "Programmer",
    company: "CodeWithSam"
};

for (const key in obj) {
    console.log(key);
}

for (const key in obj) {
    console.log(key + ": " + obj[key]); // Prints each key-value pair
}

/*
Output:
name: Sam
role: Programmer
company: CodeWithSam
*/

// ✅ FOR-OF LOOP (Used to iterate over iterable objects like arrays or strings)
for (const c of "Sam") {
    console.log(c); // Prints each character: S, a, m
}

// ✅ WHILE LOOP (Runs as long as the condition is true)
let i = 0;
while (i < 7) {
    console.log(i);
    i++; // Increments 'i' to avoid infinite loop
}

// ✅ DO-WHILE LOOP (Executes at least once, even if the condition is false)
/*
do {
    block of code;
} while (condition);
*/

let a = 10;
do {
    console.log(a); // Executes once even though a < 6 is false
    a++;
} while (a < 6);

/*
Output:
10
*/

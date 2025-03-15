// ✅ STRINGS IN JAVASCRIPT
console.log("Hello, I'm learning strings!");

let a = "Sandy";
console.log(a[0]);  // S
console.log(a[2]);  // n
console.log(a[4]);  // y

console.log(a.length); // 5

// ✅ Template Literals
let userName = "Sandy";
console.log(`Hello, my name is ${userName}!`);

// ✅ Uppercase and Lowercase
let b = "Suresh";
console.log(b.toUpperCase()); // SURESH
console.log(b.toLowerCase()); // suresh

// ✅ Slicing
console.log(b.slice(1, 5)); // ures
console.log(b.slice(3));    // esh

// ✅ Replace
let c = "ShivamSh";
console.log(c.replace("i", "02"));    // Sh02vamSh
console.log(c.replaceAll("Sh", "77")) // 77ivam77

// ✅ Concatenation
console.log(b.concat(a, "Kumar"));                  // SureshSandyKumar
console.log(b.concat(a, "Kumar", "Rahul", "Singh")); // SureshSandyKumarRahulSingh

// ✅ Remove Whitespace
let d = "    Sam   ";
console.log(d.trim());      // Sam
console.log(d.trimStart()); // "Sam   "
console.log(d.trimEnd());   // "    Sam"

// ✅ indexOf
let i = "Ramesh";
console.log(i.indexOf("am")); // 1

// ✅ charAt
console.log(i.charAt(3)); // e

// ✅ startWith & endsWith
console.log(i.startsWith("Ra")); // true
console.log(i.endsWith("esh"));  // true

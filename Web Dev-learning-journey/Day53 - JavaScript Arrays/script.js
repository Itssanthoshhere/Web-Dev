// ✅ Understanding JavaScript Arrays


// 1️⃣ Array Basics

console.log("Hello, I'm learning arrays!");

// 🔹 Declaring an array
let arr = [1, 2, 4, 5, 7];
// Index:  0  1  2  3  4  

// 🔹 Modifying array elements
arr[0] = 566;
console.log(arr, typeof arr);  // Output: [566, 2, 4, 5, 7] 'object'
console.log(arr.length);  // Output: 5

// 🔹 Accessing elements
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);


/*
--> 2️⃣ Array Methods

|     Method    |               Description                 |
|---------------|-------------------------------------------|
| `toString()`  | Converts array to string                  |
| `join()`      | Joins elements with a separator           |
| `pop()`       | Removes last element                      |
| `push()`      | Adds an element at the end                |
| `shift()`     | Removes first element                     |
| `unshift()`   | Adds element at the beginning             |
| `delete`      | Deletes an element (leaves an empty space)|
| `concat()`    | Combines multiple arrays                  |
| `sort()`      | Sorts an array (by default as strings)    |
| `splice()`    | Removes, replaces, or adds elements       |
| `slice()`     | Extracts a portion of an array            |
| `reverse()`   | Reverses array order                      |
*/


// 3️⃣ Using Different Methods

// 🔹 Convert array to a string (`toString` & `join`)
console.log(arr.toString());  // "566,2,4,5,7"
console.log(arr.join(" and "));  // "566 and 2 and 4 and 5 and 7"

// 🔹 Remove last element (`pop`)
arr.pop();
console.log(arr);  // [566, 2, 4, 5]

// 🔹 Add elements at the end (`push`)
arr.push(100);
console.log(arr);  // [566, 2, 4, 5, 100]

arr.push("Sam");
console.log(arr);  // [566, 2, 4, 5, 100, "Sam"]

// 🔹 Remove first element (`shift`)
arr.shift();
console.log(arr);  // [2, 4, 5, 100, "Sam"]

// 🔹 Add element at the beginning (`unshift`)
arr.unshift("Jack");
console.log(arr);  // ["Jack", 2, 4, 5, 100, "Sam"]

// 🔹 Delete an element (leaves an empty space)
delete arr[5];
console.log(arr);  // Output: ["Jack", 2, 4, 5, 100, empty]
console.log(arr.length); // Still 6 (deletes but keeps length)


// 4️⃣ Merging & Sorting Arrays

// 🔹 Merging arrays (`concat`)
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [9, 8, 7];

console.log(a1.concat(a2, a3));  // Output: [1, 2, 3, 4, 5, 6, 9, 8, 7]

// ✔ Sorting [default as strings](`sort`)
let a = [7, 9, 8];
console.log(a.sort());  // Output: [7, 8, 9] (Default: Alphabetical sorting)

// ✔ Fix for numerical sorting
console.log(a.sort((x, y) => x - y));  // [7, 8, 9]


// 5️⃣ Splicing & Slicing

// ✔ Removing and replacing elements (`splice`)
let number = [1, 2, 3, 4, 5];
console.log(number.splice(1, 3));  // Removes [2, 3, 4]
console.log(number);  // Output: [1, 5]

// ✔ Splicing (replacing elements)
console.log(number.splice(1, 1, 222, 333));  // Replace index 1
console.log(number);  // Output: [1, 222, 333]

// ✔ Extracting part of an array (`slice`)
let nums = [10, 20, 30, 40, 50];
console.log(nums.slice(1, 3));   // Output: [20, 30] (Index 1 to 2)

// ✔ Reversing an array (`reverse`)
console.log(nums.reverse());  // Output: [50, 40, 30, 20, 10]


// 6️⃣ Looping through Arrays

let n = [1, 93, 5, 6, 88];

// 🔸 Using a `for` loop
for (let i = 0; i < n.length; i++) {
    console.log(n[i]);
}

// 🔸 Using `forEach()` loop
n.forEach((value, index, arr) => {
    console.log(value, index, arr);
});

// 🔸 Using `for...of` loop
for (const iterator of n) {
    console.log(iterator);
}

for (const value of n) {
    console.log(value);
}

// 🔸 for...in loop
let obj = {
    a: 1,
    b: 2,
    c: 3,
};

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);
    }
}




// 7️⃣ Array Transformations

/* Normal way without using map
let newArr = [];

for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    newArr.push(element ** 2);
}

console.log(newArr);
*/

// `map()` – Transform each element [Squaring each element]
let arr1 = [1, 13, 5, 7, 11];

let squaredArr = arr1.map(e => e ** 2);
console.log(squaredArr);  // Output: [1, 169, 25, 49, 121]

// or 

let newArr1 = arr1.map((e, index, array) => {
    return e ** 2;
})

console.log(newArr1);


// 🔹 Using filter() - Filtering numbers > 7
let arr2 = [1, 25, 4, 32, 7];

let greaterThanSeven = arr2.filter(e => e > 7);
console.log(greaterThanSeven);  // Output: [25, 32]

// or

const greaterThanSevens = (e) => {
    if (e > 7) {
        return true;
    }
    return false;
}

console.log(arr2.filter(greaterThanSevens));

// or 

console.log(arr2.filter((e) => {
    if (e > 7) {
        return true;
    }
    return false;
}))


// 🔹 `reduce()` – Reduce to a single value [Multiplying all elements]
let arr3 = [1, 2, 3, 4, 5, 6];

let product = arr3.reduce((a, b) => a * b);
console.log(product);  // Output: 720

// or 

const red = (a, b) => {
    return a * b;
}

console.log(arr3.reduce(red));


// 🔹 Convert string to an array (`Array.from`)
console.log(Array.from("Sandy"));  // Output: ['S', 'a', 'n', 'd', 'y']


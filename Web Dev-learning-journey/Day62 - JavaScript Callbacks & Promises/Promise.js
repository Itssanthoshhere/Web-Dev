console.log("Promise.js initializing!!");
console.log("This is Promises");

// Creating the first Promise (prom1)
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random(); // Generates a random number between 0 and 1
    if (a < 0.5) {
        reject("❌ prom1: Random number was not supporting you!");
    } else {
        setTimeout(() => {
            console.log("✅ prom1: Task completed!");
            resolve("Sandy");
        }, 3000); // Resolves after 3 seconds
    }
});

// Handling Promise Resolution & Rejection using `.then()` & `.catch()`
prom1.then((value) => {
    console.log("prom1 Resolved with:", value);
}).catch((err) => {
    console.log("prom1 Rejected with:", err);
});


// → Promise API
// Creating the second Promise (prom2)
let prom2 = new Promise((resolve, reject) => {
    let b = Math.random(); // Generates another random number
    if (b < 0.5) {
        reject("❌ prom2: Random number was not supporting you 2!");
    } else {
        setTimeout(() => {
            console.log("✅ prom2: Task completed!");
            resolve("Sandy 2");
        }, 1000); // Resolves after 1 second
    }
});

// Using `Promise.allSettled([prom1, prom2])`
let p3 = Promise.allSettled([prom1, prom2]);
p3.then((results) => {
    console.log("📝 Promise.allSettled Results:", results);
}).catch((err) => {
    console.log("Error in Promise.allSettled:", err);
});

// ✅ Uncomment & Try `Promise.all([prom1, prom2])`
// Promise.all waits for all Promises to resolve; if any fails, it rejects the entire Promise
// let pAll = Promise.all([prom1, prom2]);
// pAll.then((values) => {
//     console.log("Promise.all Resolved:", values);
// }).catch((err) => {
//     console.log("Promise.all Rejected:", err);
// });


// ✅ Using `Promise.race([prom1, prom2])` (Resolves with the first resolved promise)
let pRace = Promise.race([prom1, prom2]);
pRace.then((winner) => {
    console.log("🏆 Promise.race Winner:", winner);
}).catch((err) => {
    console.log("Promise.race Rejected:", err);
});


// ✅ Using `Promise.any([prom1, prom2])` (Resolves with the first successful promise)
let pAny = Promise.any([prom1, prom2]);
pAny.then((fastestSuccess) => {
    console.log("🚀 Promise.any Fastest Success:", fastestSuccess);
}).catch((err) => {
    console.log("Promise.any Rejected (All failed):", err);
});

// ✅ Creating a resolved Promise
let resolvedPromise = Promise.resolve("✅ Instantly Resolved!");
resolvedPromise.then((res) => console.log(res));

// ✅ Creating a rejected Promise
let rejectedPromise = Promise.reject("❌ Instantly Rejected!");
rejectedPromise.catch((err) => console.log(err));

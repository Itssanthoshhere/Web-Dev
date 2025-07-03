console.log("Callback.js initializing!!");

/*
→  Asynchronous Actions:
    - Asynchronous actions are operations that start now but finish later.
    - Example: `setTimeout()`, API calls, event listeners, and file reading.
    
→  Synchronous Actions:
    - These execute sequentially, one after another.
*/

console.log("Sam is a hacker");
console.log("Ram is also a hacker");

// 🕒 setTimeout() - Executes the function after the specified time (0ms here)
setTimeout(() => {
    console.log("I'm inside setTimeout!");
}, 0);

setTimeout(() => {
    console.log("I'm inside setTimeout 2!");
}, 0);

// 👇 This line executes immediately, before setTimeout callbacks
console.log("The End!");


// 🏷️ Callback Function Example
const fn = () => {
    console.log("Nothing");  // This function simply logs "Nothing"
};

const callback = (arg, fn) => {
    console.log(arg); // Logs the argument passed
    fn(); // Calls the passed function
};

// 📜 Function to Dynamically Load a Script
const loadScript = (src, callback) => {
    let sc = document.createElement("script"); // Creates a new <script> tag
    sc.src = src;  // Sets the source of the script
    sc.onload = callback("Sam", fn); // Calls callback when the script is loaded
    document.head.append(sc); // Appends the script to <head> to execute
};

// 🛠️ Calling loadScript() to load an external script
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);

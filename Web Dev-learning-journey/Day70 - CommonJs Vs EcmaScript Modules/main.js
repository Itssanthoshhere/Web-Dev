// TODO: Import named exports from a custom module using ES6 import syntax
// import { a, b } from "./mymodule.js";
// console.log(a, b); // NOTE: Output: 1 2

// TODO: Import the default export from a custom module
// import obj from "./mymodule.js";
// console.log(obj); // NOTE: Output: { x: 5, y: 7 }

// TODO: Import built-in modules using CommonJS style
// const { createServer } = require('node:http'); // NOTE: For creating HTTP servers
// const fs = require("fs"); // NOTE: For working with the file system

// NOTE: Node.js CommonJS module wrapper function
(function (exports, require, module, __filename, __dirname) {
  // INFO: This function wraps every Node.js module by default
  // INFO: 'exports' → object returned from the moduleOP
  // INFO: 'require' → used to import other modules
  // INFO: 'module' → represents the current module
  // INFO: '__filename' → full path of the current file
  // INFO: '__dirname' → directory path of the current file
}
); // NOTE: Simulates a module-like scope in Node.js

// TODO: Import a custom module using CommonJS
const a = require("./mymodule2.js"); // NOTE: Importing everything from 'mymodule2.js' as an object
console.log(a); // NOTE: Output: { a: 1, b: 2 }
// console.log(a.a); // NOTE: Access individual properties → Output: 1

// INFO: Displaying current module information
console.log(__dirname); // INFO: Outputs the directory of the current module
console.log(__filename); // INFO: Outputs the full path of the current file

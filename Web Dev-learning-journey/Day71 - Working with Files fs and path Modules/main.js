const { error } = require("console");
const fs = require("fs");
console.log(fs)

console.log("Starting the file system module demo...");
// fs.writeFileSync("sandy.txt", "Hello, this is a test file created using Node.js fs module.");

fs.writeFile("sandy2.txt", "Hello, this is a test file created using Node.js fs module.", () => {
    console.log("File created successfully.");

    fs.readFile("sandy2.txt", (error, data) => {
        console.log(error, data.toString());
    })
});

fs.appendFile("sandy.txt", "sandyrobo", (e, d) => {
    console.log(d);
})

console.log("File system module demo completed.");

import fs from "fs/promises"

let a = await fs.readFile("sandy.txt");
console.log(a.toString());

let b = await fs.writeFile("sandy.txt", "\n\n\n\n\n\nThis is a amazing promise based file system module demo.");
console.log(b );
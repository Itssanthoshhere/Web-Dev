import { Console } from "console";
import path from "path"
console.log(path);

let myPath = "C:\\Users\\sandy\\OneDrive\\Documents\\Web Dev learning journey\\Day71 - Working with Files fs and path Modules\\sandy.txt";
console.log(path.extname(myPath));

console.log(path.dirname(myPath));
console.log(path.basename(myPath));

console.log(path.join("C:/", "programs\\sandy.txt"));


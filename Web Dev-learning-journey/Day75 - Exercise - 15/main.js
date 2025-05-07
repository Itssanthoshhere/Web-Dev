// Exercise - 15 | Clear the Clutter

/* Problem Statement:
    Write a Node.js program to clean up a directory by organizing files 
    into folders based on their extensions.

    🧾 Example:
        Directory contains:
            - name.jpg
            - name.png
            - this.pdf
            - sandy.zip
            - sam.zip
            - cat.jpg

        After running the script:
            - jpg/name.jpg, jpg/cat.jpg
            - png/name.png
            - pdf/this.pdf
            - zip/sandy.zip, zip/sam.zip
            - other/other.txt, other.docx, etc.
*/

// NOTE: Import required modules
import fs from "fs/promises";     // Modern promise-based fs module
import fsn from "fs";             // Node's default fs module for sync operations
import path from "path";          // To handle and transform file paths

// TODO: Replace with your target base path
const basepath = "D:\\Web Dev\\Web-Dev\\Web Dev-learning-journey\\Day75 - Exercise - 15";

// NOTE: Read all files in the directory
let files = await fs.readdir(basepath);

// Loop through each file in the directory
for (const item of files) {
    console.log("Running for item: ", item);

    // Extract file extension (e.g., "jpg" from "image.jpg")
    let ext = item.split(".")[item.split(".").length - 1];

    // Skip JS and JSON files + check if file has a valid extension
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {

        // ✅ If directory for this extension already exists
        if (fsn.existsSync(path.join(basepath, ext))) {
            // Move the file to that directory
            fs.rename(
                path.join(basepath, item),           // current file path
                path.join(basepath, ext, item)       // new path in extension folder
            );
        } else {
            // ❌ If folder doesn't exist, create one and then move the file
            await fs.mkdir(path.join(basepath, ext));
            fs.rename(
                path.join(basepath, item),
                path.join(basepath, ext, item)
            );
        }
    }
}

/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('WebDevDatabase');

// Insert a few documents into the courses collection.
db.getCollection('Courses').insertMany([
  {
    "name": "Python",
    "Price": 15000,
    "Instructor": "Alice"
  },
  {
    "name": "JavaScript",
    "Price": 18000,
    "Instructor": "Bob"
  },
  {
    "name": "C++",
    "Price": 22000,
    "Instructor": "Charlie"
  },
  {
    "name": "Ruby",
    "Price": 17000,
    "Instructor": "David"
  },
  {
    "name": "C#",
    "Price": 19000,
    "Instructor": "Eva"
  },
  {
    "name": "Swift",
    "Price": 21000,
    "Instructor": "Frank"
  },
  {
    "name": "Kotlin",
    "Price": 16000,
    "Instructor": "Grace"
  },
  {
    "name": "PHP",
    "Price": 23000,
    "Instructor": "Hank"
  },
  {
    "name": "TypeScript",
    "Price": 20000,
    "Instructor": "Ivy"
  },
  {
    "name": "Go",
    "Price": 18000,
    "Instructor": "Jack"
  }
]
);
 
// Print a message to the output window.
console.log(`Done interting documents into the Courses collection.`);

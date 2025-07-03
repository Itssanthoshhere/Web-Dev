// Displays an alert pop-up with the message "Hello World"
alert("Hello World");  

// Logs a message to the console
console.log("Code is running...");
console.log("Code is looking like a wow...");

// Prompts the user to enter a number and stores it in the variable 'a'
// The prompt function always returns a string
var a = prompt("Enter your number: ");

// Displays a confirmation dialog with a message
// The user can click "OK" (true) or "Cancel" (false)
var isTrue = confirm("Are you sure you want to leave this page & blast your computer?");

// Checks the user's response from the confirm box
if (isTrue) {
    console.log("Computer is blasting!");  // Logs this message if the user clicks "OK"
} else {
    console.log("Computer is safe!");  // Logs this message if the user clicks "Cancel"
}

// Logs the number entered by the user
console.log("Your number is: " + a);

// Changes the document's title to "New Title"
document.title = "New Title";

// Changes the background color of the entire webpage to light blue
document.body.style.backgroundColor = "lightblue";

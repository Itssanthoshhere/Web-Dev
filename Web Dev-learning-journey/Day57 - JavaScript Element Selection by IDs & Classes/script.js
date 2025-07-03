// Logs "Hello World!" to the console
console.log("Hello World!");

// Select all elements with class "box"
let boxes = document.getElementsByClassName("box");
console.log(boxes); // Logs the HTMLCollection of elements with class "box"

// Change the background color of the 3rd box (index 2) to red
boxes[2].style.backgroundColor = "red";

// Select the element with ID "yellowbox" and change its background color to yellow
document.getElementById("yellowbox").style.backgroundColor = "yellow";

// Select the first element with class "box" and change its background color to aqua
document.querySelector(".box").style.backgroundColor = "aqua";

// Select all elements with class "box" and set their background color to green
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green";
});

// Logs all <div> elements in the document
console.log(document.getElementsByTagName("div"));

// Store all <div> elements in variable 'a'
let a = document.getElementsByTagName("div");

// Check if the 5th <div> (index 4) matches the ID "yellowBox" and log the result
console.log(a[4].matches("#yellowBox"));
// Returns true if a[4] has the ID 'yellowBox', otherwise false

// Find the closest ancestor with class "container" for the 4th <div> (index 3)
console.log(a[3].closest(".container")); // Correct method: closest()

// Find the closest ancestor with the "html" tag for the 4th <div> (index 3)
console.log(a[3].closest("html")); // Correct method: closest()

// Check if the "container" div contains the 4th <div> (index 3) and log the result
console.log(document.querySelector(".container").contains(a[3]));
// Returns true if a[3] is inside the .container div

// Check if the "container" div contains the 1st <div> (index 0) and log the result
console.log(document.querySelector(".container").contains(a[0]));
// Returns true if a[0] is inside the .container div

// Check if the "container" div contains the <body> element and log the result
console.log(document.querySelector(".container").contains(document.querySelector("body")));
// Returns false because .container is inside <body>, not the other way around

// Check if the <body> element contains the "container" div and log the result
console.log(document.querySelector("body").contains(document.querySelector(".container")));
// Returns true because <body> contains .container

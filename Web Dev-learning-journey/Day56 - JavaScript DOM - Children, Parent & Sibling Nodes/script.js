// Logs "Hello World!" to the console
console.log("Hello World!");

// Accessing the <body> element of the document
console.log(document.body);

// Getting all child nodes of the <body> (includes text nodes, elements, and scripts)
console.log(document.body.childNodes);

// Accessing individual child nodes by index
console.log(document.body.childNodes[0]); // First child node (might be a text node due to whitespace)
console.log(document.body.childNodes[1]); // Second child (likely the first <div> container)
console.log(document.body.childNodes[1].childNodes); // Getting all child nodes inside this element

// Storing the first child element of <body> (usually the container div) in a variable
let cont = document.body.childNodes[1];
console.log(cont); // Logs the container div

// Accessing first and last child nodes of the container (text nodes included)
console.log(cont.firstChild); // Might be a text node if there's whitespace
console.log(cont.lastChild);  // Might also be a text node if there's whitespace

// Accessing first and last **element** children (ignoring text nodes)
console.log(cont.firstElementChild); // First actual child element (Box1)
console.log(cont.lastElementChild);  // Last actual child element (Box5)

// Changing the style of the last child element (Box5)
cont.lastElementChild.style.color = "red"; // Sets text color to red
cont.lastElementChild.style.backgroundColor = "yellow"; // Sets background color to yellow

// Getting the parent element of the first box (which is the container div)
console.log(cont.firstElementChild.parentElement);

// Accessing the first element child of <body> (the container div)
console.log(document.body.firstElementChild);

// Getting all child nodes of the first element child of <body>
console.log(document.body.firstElementChild.childNodes);

// Getting all child elements (ignores text nodes)
console.log(document.body.firstElementChild.children);

// Accessing specific children of the container div
console.log(document.body.firstElementChild.children[0]); // Box1
console.log(document.body.firstElementChild.children[1]); // Box2
console.log(document.body.firstElementChild.children[3]); // Box4

// Navigating between siblings
console.log(document.body.firstElementChild.children[3].nextElementSibling); // Next sibling of Box4 (Box5)
console.log(document.body.firstElementChild.children[3].previousElementSibling); // Previous sibling of Box4 (Box3)

// Getting the parent element of Box4 (which is the container div)
console.log(document.body.firstElementChild.children[3].parentElement);

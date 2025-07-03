// Selects the first element with class "box"
document.querySelector(".box");

// Gets the inner HTML content of the first "box"
document.querySelector(".box").innerHTML;

// Selects the first element with class "container"
document.querySelector(".container");

// Gets the inner HTML content of the "container"
document.querySelector(".container").innerHTML;

// Gets only the visible text inside the first "box"
document.querySelector(".box").innerText;

// Gets only the visible text inside the "container"
document.querySelector(".container").innerText;

// Gets the full outer HTML of the "container" (includes the element itself)
document.querySelector(".container").outerHTML;

// Gets the tag name of the "container" (e.g., DIV)
document.querySelector(".container").tagName;

// Gets the node name of the "container" (similar to tagName, returns "DIV")
document.querySelector(".container").nodeName;

// Gets the full text content inside the "container" (including hidden text)
document.querySelector(".container").textContent;

// Checks if the "container" is hidden (returns true/false)
document.querySelector(".container").hidden;

// Hides the container (uncomment to apply)
// document.querySelector(".container").hidden = true;

// Changes the content of the first "box" (uncomment to apply)
// document.querySelector(".box").innerHTML = "Hey I'm Sandy";

// Checks if the first "box" has a "style" attribute (returns true/false)
document.querySelector(".box").hasAttribute("style");

// Gets the value of the "style" attribute of the first "box"
document.querySelector(".box").getAttribute("style");

// Sets the "style" attribute of the first "box" (changes display to inline)
document.querySelector(".box").setAttribute("style", "display: inline");

// Gets all custom data attributes from the first "box" (uncomment to see result)
// console.log(document.querySelector(".box").dataset);

// Removes the first "box" from the DOM (uncomment to apply)
// document.querySelector(".box").remove();

// Gets all classes assigned to the "container" as a DOMTokenList
document.querySelector(".container").classList;

// Gets the class names of the "container" as a string
document.querySelector(".container").className;

// Adds a new class "Ram" to the "container"
document.querySelector(".container").classList.add("Ram");

// Removes the class "Ram" from the "container"
document.querySelector(".container").classList.remove("Ram");

// Toggles (adds/removes) the class "red" on the "container" (if present, removes; if absent, adds)
document.querySelector(".container").classList.toggle("red");

// Toggles the class "red" again on the "container"
document.querySelector(".container").classList.toggle("red");

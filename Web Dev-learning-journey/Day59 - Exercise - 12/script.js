/*  Exercise - 12 | Color the Boxes 
    Given 5 boxes, Assign a random color and a random background to each box using DOM concepts
*/

console.log("Script.js initializing!!");

// Select all boxes
let boxes = document.querySelectorAll(".box");

/* Function to generate a random RGB color */
function getRandomColor() {
    let val1 = Math.floor(Math.random() * 256); // Red
    let val2 = Math.floor(Math.random() * 256); // Green
    let val3 = Math.floor(Math.random() * 256); // Blue
    return `rgb(${val1}, ${val2}, ${val3})`;
}


// Array.from(boxes).forEach(e => {
//     e.style.backgroundColor = getRandomColor();
//     e.style.color = getRandomColor();
// })

/* Function to change colors of all boxes */
function changeColors() {
    boxes.forEach(box => {
        let bgColor = getRandomColor();
        let textColor = getRandomColor();

        box.style.backgrounColor = bgColor;
        box.style.color = textColor;
    });
}

// Initial color assignment when the page loads
changeColors();

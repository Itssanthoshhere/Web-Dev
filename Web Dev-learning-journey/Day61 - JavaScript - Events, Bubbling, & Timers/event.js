// 📌 Select the button element by its ID
let button = document.getElementById("btn");

/*
🔗 Reference: List of all mouse events
https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
*/

// 🖱️ Click Event - Changes the content of the first box when clicked
button.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = "<b>Yayy! You clicked me!</b>";
});

// 🖱️ Double Click Event - Changes the content of the second box when double-clicked
button.addEventListener("dblclick", () => {
    document.querySelector(".box1").innerHTML = "<b>Yayy! You double-clicked me!</b>";
});

// 🚫 Prevent Right Click (Context Menu) - Alerts the user when they try to right-click
button.addEventListener("contextmenu", (event) => {
    event.preventDefault(); // Prevents the default right-click menu from appearing
    alert("Don't hack us by Right click, please! 🚀");
});

// 🎹 Keydown Event - Logs the key pressed along with its key code
document.addEventListener("keydown", (e) => {
    console.log(`Key Pressed: ${e.key} | Key Code: ${e.keyCode}`);
});

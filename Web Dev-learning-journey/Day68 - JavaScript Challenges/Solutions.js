/* 
// 1. The Magical Sorting Hat:
   Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.
*/
function sortingHat(students) {
    return students.map(name => {
        if (name.length < 6) {
            return { name, house: "Gryffindor" };
        } else if (name.length < 8) {
            return { name, house: "Hufflepuff" }
        } else if (name.length < 12) {
            return { name, house: "Ravenclaw" }
        }
        return { name, house: "Slytherin" };
    });
}

// Example
console.log(sortingHat(["Harry", "Hermione", "Luna", "Draco", "Cedric"]));


/* 
// 2. The Double Trouble:
   You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
*/
function doubleTrouble(arr) {
    return arr.map((num, index, array) =>
        (index > 0 && num === array[index - 1]) ? num : num * 2
    );
}

// Example
console.log(doubleTrouble([2, 2, 3, 4, 4, 5]));


/* 
// 3. The Mirror Mirror:
   Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
*/
function mirrorString(str) {
    return str + str.split("").reverse().join("");
}

// Example
console.log(mirrorString("hello")); // "helloolleh"


/* 
// 4. The Password Validator:
   You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
*/
function isValidPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
}

// Example
console.log(isValidPassword("StrongP@ss1")); // true
console.log(isValidPassword("weakpass")); // false


/* 
// 5. The Sum Selector:
   You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
*/
function sumUntilNegative(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num < 0) break;
        sum += num;
    }
    return sum;
}

// Example
console.log(sumUntilNegative([1, 2, 3, -1, 4])); // 6


/* 
// 6. The Vowel Counter:
   You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.
*/
function countVowels(str) {
    return (str.match(/[aeiouAEIOU]/g) || []).length;
}

// Example
console.log(countVowels("Hello World")); // 3


/* 
// 7. The Local Storage Manager:
    You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.
*/
function saveNoteToLocalStorage(note) {
    localStorage.setItem("note", JSON.stringify(note));
}

// Example
saveNoteToLocalStorage({ title: "Meeting", content: "Discuss project updates" });


/* 
// 8. Async Array Mapping:
   Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
*/
async function asyncDouble(arr) {
    return Promise.all(arr.map(num =>
        new Promise(resolve => setTimeout(() => resolve(num * 2), 500))
    ));
}

// Example
asyncDouble([1, 2, 3]).then(console.log);


/* 
// 9. The Asynchronous Shopper:
   Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.
*/
function placeOrder(order) {
    return new Promise(resolve => {
        let delay = Math.random() * 2000;
        setTimeout(() => resolve(`Order for ${order} placed successfully!`), delay);
    });
}

// Example
placeOrder("Laptop").then(console.log);


/* 
// 10. The Coffee Machine:
    In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.
*/
function brewCoffee(type) {
    return new Promise(resolve => {
        let delay = Math.random() * 3000;
        setTimeout(() => resolve(`${type} coffee is ready!`), delay);
    });
}

// Example
brewCoffee("Espresso").then(console.log);


/* 
// 11. The Array Filterer:
    You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.
*/
function filterProducts(products, criterion) {
    return products.filter(product => product.category === criterion);
}

// Example
console.log(filterProducts(
    [{ name: "Laptop", category: "Electronics" }, { name: "Apple", category: "Fruits" }],
    "Electronics"
));


/* 
// 12. The Token Manager:
    You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.
*/
function setAuthToken(token, expirationMinutes = 60) {
    let expirationTime = Date.now() + expirationMinutes * 60000;
    localStorage.setItem("authToken", JSON.stringify({ token, expirationTime }));
}

// Example
setAuthToken("abcd1234");


/* 
// 13. The Shopping Cart Totalizer:
    You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.
*/
function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Example
console.log(calculateTotal([{ price: 100, quantity: 2 }, { price: 50, quantity: 1 }])); // 250


/* 
// 14. The Window Scroller:
    You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.
*/
function smoothScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Example (Call in browser console)
smoothScrollToTop();

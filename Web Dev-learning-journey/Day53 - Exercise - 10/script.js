/*  Exercise - 10 | Business Name Generator 
    Create a business name generator by combining an adjective, a shop name, and another word.

    Adjectives:
    - Crazy 
    - Amazing
    - Fire 

    Shop Names:
    - Engine
    - Foods
    - Garments

    Another Words:
    - Bros
    - Limited
    - Hub
*/

let rand = Math.random(); // Generate a random number between 0 and 1
let first, second, third; // Variables to store selected words

// Generating the first word (Adjective)
if (rand < 0.33) {
    first = "Crazy";
} else if (rand < 0.66) {
    first = "Amazing";
} else {
    first = "Fire";
}

// Generating the second word (Shop Name)
rand = Math.random(); // Generate a new random number

if (rand < 0.33) {
    second = "Engine";
} else if (rand < 0.66) {
    second = "Foods";
} else {
    second = "Garments";
}

// Generating the third word (Another Word)
rand = Math.random(); // Generate a new random number

if (rand < 0.33) {
    third = "Bros";
} else if (rand < 0.66) {
    third = "Limited";
} else {
    third = "Hub";
}

// Output the randomly generated business name
console.log(`${first} ${second} ${third}`);

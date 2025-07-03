console.log("Script.js initializing!!"); // Logs the initialization of the script

// Object creation using literal notation
let obj = {
    a: 1,
    b: "Sandy",
};

console.log(obj);

// Prototypal Inheritance Example
let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // Rabbit now inherits from animal

// Class Example
class Animal {
    constructor(name) {
        this.name = name;
        console.log("Object is created...");
    }

    eats() {
        console.log("Kha raha hoon");
    }

    jumps() {
        console.log("Kood raha hoon");
    }
}

// Class Inheritance
class Lion extends Animal {
    constructor(name) {
        super(name);
        console.log("Object is created and this is a lion...");
    }

    // Method Overriding
    eats() {
        super.eats(); // Calls parent class method
        console.log("Kha raha hoon roar");
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);

// Getters & Setters
class User {
    constructor(name1) {
        this.name1 = name1; // Calls the setter
    }

    get name1() {
        return this._name1;
    }

    set name1(value) {
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name1 = value;
    }
}

let user = new User("John");
console.log(user.name1); // John

user = new User(""); // Name is too short.
// user.name = "";
console.log(user);

/*
// instanceof Operator
    --> It returns true if obj belongs to the class or any other class inheriting from it.
*/
console.log(l instanceof Lion);   // true
console.log(l instanceof Animal); // true
console.log(a instanceof Lion);   // false

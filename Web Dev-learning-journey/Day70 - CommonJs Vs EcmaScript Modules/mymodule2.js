// TODO: Export an object with properties 'a' and 'b'
module.exports = {
    a: 1,
    b: 2,
}

// NOTE: Define a new variable 'c'
let c = 50;

// BUG: This will override the previous `module.exports` object
// HACK: Only 'c' will be exported, and 'a' and 'b' will be lost
module.exports = c;
// INFO: This will not work as expected because 'module.exports' is being reassigned
// INFO: The previous object is lost, and only 'c' is exported
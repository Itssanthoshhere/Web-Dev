// NOTE: Named exports – can be imported using { a, b, c, d, e }
export const a = 1; // named export
export const b = 2;
export const c = 3;
export const d = 4;
export const e = 5;

// TODO: Create an object to export as default
const obj = {
    x: 5,
    y: 7,
}

// NOTE: Default export – can be imported using any name of your choice
export default obj;
// // INFO: Default export is a single value or object that can be imported without curly braces
// // INFO: Named exports are multiple values or objects that can be imported using curly braces
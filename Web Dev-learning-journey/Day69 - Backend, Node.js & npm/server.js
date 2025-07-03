// Import the 'slugify' package
var slugify = require('slugify');

// Slugify a normal string using the default separator '-' (hyphen)
let a = slugify('some string'); // Converts to 'some-string'
console.log(a); // Output: some-string

// Slugify a string with special characters using '_' as a custom separator
const b = slugify('some st&&*(^%$$^^&ring', '_'); 
// Special characters are removed, and spaces are replaced with '_'
console.log(b); // Output: some_string


// How do you reverse a string?
function reverseString(str) {
    return str.split('').reverse().join('');
}
// Example usage
var original = "Hello, world!";
var rev = reverseString(original);
console.log("Original String:", original);
console.log("Reversed String:", rev);

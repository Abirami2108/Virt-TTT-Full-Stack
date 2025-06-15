// How do you reverse a string?
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Example usage
const original = "Hello, world!";
const rev = reverseString(original);

console.log("Original String:", original);
console.log("Reversed String:", rev);

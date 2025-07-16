// How do you calculate the number of numerical digits in a string?
function countDigits(input: string): number {
    const digits = input.match(/\d/g);    
    return digits ? digits.length : 0;
}

const testString = "Abc123def456";
const digitCount = countDigits(testString);

console.log(`The number of numerical digits in the string is: ${digitCount}`);

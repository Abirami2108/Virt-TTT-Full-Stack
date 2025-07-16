// How do you find the count for the occurrence of a particular character in a string?
function countCharOccurrence(input: string, targetChar: string): number {
    let count = 0;
    for (const char of input) {
        if (char === targetChar) {
            count++;
        }
    }
    return count;
}

console.log(countCharOccurrence("experience", "e"));

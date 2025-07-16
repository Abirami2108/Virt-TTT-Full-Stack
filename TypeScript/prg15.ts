// How do you find the non-matching characters in a string?
function findNonMatchingChars(str1: string, str2: string): string[] {
    const set1 = new Set(str1);
    const set2 = new Set(str2);

    const nonMatching: Set<string> = new Set();

    for (const char of set1) {
        if (!set2.has(char)) {
            nonMatching.add(char);
        }
    }

    for (const char of set2) {
        if (!set1.has(char)) {
            nonMatching.add(char);
        }
    }

    return Array.from(nonMatching);
}

// const res = findNonMatchingChars("abcde", "aceg");
// console.log("Non-matching characters:", result); 
// How do you find out if the two given strings are anagrams?

function isAnagram(str1: string, str2: string): boolean {
    const normalize = (str: string): string =>
        str.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");

    return normalize(str1) === normalize(str2);
}

console.log(isAnagram("listen", "silent"));     
console.log(isAnagram("Hello", "Olelh"));       
console.log(isAnagram("hello", "world"));       
console.log(isAnagram("Debit Card", "Bad Credit")); 

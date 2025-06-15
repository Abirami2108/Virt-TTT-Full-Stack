// How do you find out if the two given strings are anagrams?
function isAnagram(str1, str2) {
    var normalize = function (str) {
        return str.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");
    };
    return normalize(str1) === normalize(str2);
}
// Test examples
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("Hello", "Olelh")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("Debit Card", "Bad Credit")); // true

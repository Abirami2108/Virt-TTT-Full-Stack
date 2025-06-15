// How do you find the non-matching characters in a string?
function findNonMatchingChars(str1, str2) {
    var set1 = new Set(str1);
    var set2 = new Set(str2);
    var nonMatching = new Set();
    for (var _i = 0, set1_1 = set1; _i < set1_1.length; _i++) {
        var char = set1_1[_i];
        if (!set2.has(char)) {
            nonMatching.add(char);
        }
    }
    for (var _a = 0, set2_1 = set2; _a < set2_1.length; _a++) {
        var char = set2_1[_a];
        if (!set1.has(char)) {
            nonMatching.add(char);
        }
    }
    return Array.from(nonMatching);
}
// const res = findNonMatchingChars("abcde", "aceg");
// console.log("Non-matching characters:", result); 

// How do you find the count for the occurrence of a particular character in a string?
function countCharOccurrence(input, targetChar) {
    var count = 0;
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        if (char === targetChar) {
            count++;
        }
    }
    return count;
}
console.log(countCharOccurrence("experience", "e"));

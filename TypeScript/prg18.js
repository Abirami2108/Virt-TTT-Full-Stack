// How do you total all of the matching integer elements in an array?
function sumOfDuplicates(arr) {
    var freqMap = new Map();
    // Count frequency
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    // Sum elements that appear more than once
    var total = 0;
    for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
        var num = arr_2[_a];
        if ((freqMap.get(num) || 0) > 1) {
            total += num;
        }
    }
    return total;
}
// const num = [1, 2, 3, 2, 4, 1, 5];
// console.log("Total of duplicates:", sumOfDuplicates(num)); 

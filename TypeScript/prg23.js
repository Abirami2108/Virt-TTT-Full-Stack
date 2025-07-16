// How do you find the average of numbers in a list?
function findAverage(numbers) {
    if (numbers.length === 0)
        return 0; // Avoid division by zero
    var sum = numbers.reduce(function (total, num) { return total + num; }, 0);
    return sum / numbers.length;
}
// Test
console.log(findAverage([10, 20, 30])); // Output: 20
console.log(findAverage([])); // Output: 0

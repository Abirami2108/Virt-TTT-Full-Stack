// How do you total all of the matching integer elements in an array?
function sumOfDuplicates(arr: number[]): number {
    const freqMap = new Map<number, number>();

    // Count frequency
    for (const num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Sum elements that appear more than once
    let total = 0;
    for (const num of arr) {
        if ((freqMap.get(num) || 0) > 1) {
            total += num;
        }
    }

    return total;
}

// const num = [1, 2, 3, 2, 4, 1, 5];
// console.log("Total of duplicates:", sumOfDuplicates(num)); 

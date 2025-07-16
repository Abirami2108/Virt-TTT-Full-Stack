// 10. You are given student data from multiple CSV lines. Each line is an array of strings, where:
// •	First value is the student name (sometimes padded with extra spaces).
// •	Remaining values are course names (some arrays are nested).
// •	You must: 
// o	Trim name values.
// o	Flatten all course arrays.
// o	Group them by student using Object.fromEntries().
// o	Handle errors using optional catch binding.

function processStudentData(lines: any[][]): Record<string, string[]> {
    try {
        const studentEntries = lines.map(line => {
            // Destructure first element as name, rest as courses
            const [rawName, ...courses] = line;
            const name = String(rawName).trim(); // Trim name
            const flatCourses = courses.flat(Infinity).map(String); // Flatten nested course arrays

            return [name, flatCourses]; // Entry: [name, courses[]]
        });

        return Object.fromEntries(studentEntries); // Convert entries to object
    } catch {
        console.error("Error processing student data.");
        return {};
    }
}

// Example usage
const inputData = [
    ["  Alice  ", "Math", ["Science", "History"]],
    ["Bob", [["English", "Biology"]]],
    ["  Cathrine", "Physics", ["Chemistry"]],
];

const groupedData = processStudentData(inputData);
console.log(groupedData);

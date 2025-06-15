// 10. You are given student data from multiple CSV lines. Each line is an array of strings, where:
// •	First value is the student name (sometimes padded with extra spaces).
// •	Remaining values are course names (some arrays are nested).
// •	You must: 
// o	Trim name values.
// o	Flatten all course arrays.
// o	Group them by student using Object.fromEntries().
// o	Handle errors using optional catch binding.
function processStudentData(lines) {
    try {
        var studentEntries = lines.map(function (line) {
            // Destructure first element as name, rest as courses
            var rawName = line[0], courses = line.slice(1);
            var name = String(rawName).trim(); // Trim name
            var flatCourses = courses.flat(Infinity).map(String); // Flatten nested course arrays
            return [name, flatCourses]; // Entry: [name, courses[]]
        });
        return Object.fromEntries(studentEntries); // Convert entries to object
    }
    catch (_a) {
        console.error("Error processing student data.");
        return {};
    }
}
// Example usage
var inputData = [
    ["  Alice  ", "Math", ["Science", "History"]],
    ["Bob", [["English", "Biology"]]],
    ["  Cathrine", "Physics", ["Chemistry"]],
];
var groupedData = processStudentData(inputData);
console.log(groupedData);

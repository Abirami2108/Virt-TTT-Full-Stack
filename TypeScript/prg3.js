// You have an array of student objects, each with a name, and optionally a grades array (might be missing). Write a program that:
// •	Uses arrow functions to process students.
// •	Calculates the average grade for each student who has grades.
// •	Returns an array of messages like:
// "Student [name] has an average grade of [avg]"
// •	If a student has no grades or grades is missing, safely handle it using optional chaining and return:
// "Student [name] has no grades."
var students = [
    { name: "tamil", grades: [90, 85, 88] },
    { name: "Ilavenil" },
    { name: "rishi", grades: [70, 75] },
    { name: "suhail", grades: [] }
];
var calculateAverage = function (grades) { return grades.reduce(function (sum, grade) { return sum + grade; }, 0) / grades.length; };
var messages = students.map(function (student) {
    var _a;
    var avg = ((_a = student.grades) === null || _a === void 0 ? void 0 : _a.length)
        ? calculateAverage(student.grades)
        : null;
    return avg !== null
        ? "Student ".concat(student.name, " has an average grade of ").concat(avg.toFixed(2))
        : "Student ".concat(student.name, " has no grades.");
});
messages.forEach(function (msg) { return console.log(msg); });

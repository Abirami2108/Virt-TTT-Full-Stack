// You have an array of student objects, each with a name, and optionally a grades array (might be missing). Write a program that:
// •	Uses arrow functions to process students.
// •	Calculates the average grade for each student who has grades.
// •	Returns an array of messages like:
// "Student [name] has an average grade of [avg]"
// •	If a student has no grades or grades is missing, safely handle it using optional chaining and return:
// "Student [name] has no grades."


type Student = {
    name: string;
    grades?: number[];
};

const students: Student[] = [
    { name: "tamil", grades: [90, 85, 88] },
    { name: "Ilavenil" }, 
    { name: "rishi", grades: [70, 75] },
    { name: "suhail", grades: [] }
];


const calculateAverage = (grades: number[]): number =>grades.reduce((sum, grade) => sum + grade, 0) / grades.length;


const messages: string[] = students.map(student => {
    const avg = student.grades?.length
        ? calculateAverage(student.grades)
        : null;

    return avg !== null
        ? `Student ${student.name} has an average grade of ${avg.toFixed(2)}`
        : `Student ${student.name} has no grades.`;
});


messages.forEach(msg => console.log(msg));


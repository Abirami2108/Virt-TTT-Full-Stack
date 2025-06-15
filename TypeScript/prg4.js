// 4.You have an array of people objects, each with a name and a birthdate string (format: "YYYY-MM-DD"). Write a program that:
// •	Converts the birthdate string to a Date object.
// •	Checks who has a birthday today (match day and month).
// •	Returns a message:
// "Today is [name]'s birthday!"
// •	If no birthdays today, return "No birthdays today."
var people = [
    { name: "iniya", birthdate: "1990-06-14" },
    { name: "kuravanji", birthdate: "1985-12-25" },
    { name: "mara", birthdate: "1992-01-01" },
    { name: "kudiyazh", birthdate: "2000-06-14" }
];
var today = new Date();
var todayMonth = today.getMonth(); // 0-indexed
var todayDate = today.getDate();
var birthdayMessages = people
    .filter(function (person) {
    var birthDate = new Date(person.birthdate);
    return birthDate.getMonth() === todayMonth &&
        birthDate.getDate() === todayDate;
})
    .map(function (person) { return "Today is ".concat(person.name, "'s birthday!"); });
if (birthdayMessages.length === 0) {
    console.log("No birthdays today.");
}
else {
    birthdayMessages.forEach(function (msg) { return console.log(msg); });
}

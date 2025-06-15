// You have two user profile objects:
// const user1 = { name: "Madam", age: 30, city: "Chennai" };
// const user2 = { age: 31, profession: "Developer", country: "India" };
// Write a program that:
// •	Merges both user objects into one, with properties from user2 overriding those from user1 if conflicts exist.
// •	Uses destructuring to extract name, age, and the rest of the properties separately.
// •	Prints the extracted values clearly.

const user1 = { Name: "Madam", Nge: 30, city: "Chennai" };
const user2 = { Age: 31, profession: "Developer", country: "India" };
const mergedUser = { ...user1, ...user2 };
const { Name, Age, ...otherDetails } = mergedUser;
console.log("Name:", Name);              
console.log("Age:", Age);                
console.log("Other Details:", otherDetails);

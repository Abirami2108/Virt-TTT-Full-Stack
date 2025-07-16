// Typescript - Prg1-"You are creating a user profile system for a web app. A user's name is stored in a variable. 
// You define the profile using an object, and inside a block, you modify a role field. 
// After the block, you want to confirm the original name is still used and the updated role is reflected. 
//Write a program to implement this logic and explain how the role update works while the name remains unchanged


const userName: string = "tinku";


let userProfile = {
  name: userName,
  role: "Viewer"
};

console.log("Before block:");
console.log(`Name: ${userProfile.name}, Role: ${userProfile.role}`);


{

  userProfile.role = "Admin";
}

console.log("After block:");
console.log(`Name: ${userProfile.name}, Role: ${userProfile.role}`);

  
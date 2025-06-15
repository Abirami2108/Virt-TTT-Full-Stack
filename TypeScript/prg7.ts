// 7. You are building a system where users have a list of roles. Certain roles grant access to admin panels. You also want to calculate a user’s "power score" as 2 raised to the number of roles they have.
// Write a program that:
// •	Checks if the user has any of the privileged roles (["admin", "moderator", "superuser"]) using a proper array method.
// •	Calculates their power score using exponentiation based on the number of roles.
// •	Prints a message like:
// "Access Granted. Power Score: [score]"
//  or
// "Access Denied. Power Score: [score]"

type User = {
    name: string;
    roles: string[];
};

const privilegedRoles = ["admin", "moderator", "superuser"];

// Example user
const user: User = {
    name: "Jane",
    roles: ["editor", "moderator", "contributor"]
};


const hasAccess: boolean = user.roles.some(role =>privilegedRoles.includes(role)
);

const powerScore: number = 2 ** user.roles.length;


const accessMessage = hasAccess
    ? `Access Granted. Power Score: ${powerScore}`
    : `Access Denied. Power Score: ${powerScore}`;

console.log(accessMessage);

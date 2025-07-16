//Implement a user account system where each user has a private password field.
//  Allow setting and validating password only through methods. 
// Extend this to an admin user that can reset passwords for other users.


class User {
    private password: string;
    public username: string;

    constructor(username: string) {
        this.username = username;
        this.password = ''; // default empty password
    }

    setPassword(newPassword: string): void {
        if (newPassword.length < 6) {
            console.log("Password must be at least 6 characters long.");
            return;
        }
        this.password = newPassword;
        console.log(`Password set successfully for user ${this.username}`);
    }

    validatePassword(passwordAttempt: string): boolean {
        return this.password === passwordAttempt;
    }
}

class AdminUser extends User {
    constructor(username: string) {
        super(username);
    }

    resetPassword(user: User, newPassword: string): void {
        
       
        if (newPassword.length < 6) {
            console.log("New password must be at least 6 characters.");
            return;
        }
        (user as any).password = newPassword;
        console.log(`Password for user ${user.username} reset by admin ${this.username}`);
    }
}


const user1 = new User("Prabanjan");
user1.setPassword("sec123");

console.log("Validate correct password:", user1.validatePassword("sec123")); 
console.log("Validate wrong password:", user1.validatePassword("wrong")); 

const admin = new AdminUser("admin");
admin.resetPassword(user1, "new@123");
console.log("Validate after reset:", user1.validatePassword("new@123")); 

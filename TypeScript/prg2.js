//Implement a user account system where each user has a private password field.
//  Allow setting and validating password only through methods. 
// Extend this to an admin user that can reset passwords for other users.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(username) {
        this.username = username;
        this.password = ''; // default empty password
    }
    User.prototype.setPassword = function (newPassword) {
        if (newPassword.length < 6) {
            console.log("Password must be at least 6 characters long.");
            return;
        }
        this.password = newPassword;
        console.log("Password set successfully for user ".concat(this.username));
    };
    User.prototype.validatePassword = function (passwordAttempt) {
        return this.password === passwordAttempt;
    };
    return User;
}());
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(username) {
        return _super.call(this, username) || this;
    }
    AdminUser.prototype.resetPassword = function (user, newPassword) {
        if (newPassword.length < 6) {
            console.log("New password must be at least 6 characters.");
            return;
        }
        user.password = newPassword;
        console.log("Password for user ".concat(user.username, " reset by admin ").concat(this.username));
    };
    return AdminUser;
}(User));
var user1 = new User("Prabanjan");
user1.setPassword("sec123");
console.log("Validate correct password:", user1.validatePassword("sec123"));
console.log("Validate wrong password:", user1.validatePassword("wrong"));
var admin = new AdminUser("admin");
admin.resetPassword(user1, "new@123");
console.log("Validate after reset:", user1.validatePassword("new@123"));

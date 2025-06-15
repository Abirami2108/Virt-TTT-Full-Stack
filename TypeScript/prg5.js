// You have two user profile objects:
// const user1 = { name: "Madam", age: 30, city: "Chennai" };
// const user2 = { age: 31, profession: "Developer", country: "India" };
// Write a program that:
// •	Merges both user objects into one, with properties from user2 overriding those from user1 if conflicts exist.
// •	Uses destructuring to extract name, age, and the rest of the properties separately.
// •	Prints the extracted values clearly.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var user1 = { Name: "Madam", Nge: 30, city: "Chennai" };
var user2 = { Age: 31, profession: "Developer", country: "India" };
var mergedUser = __assign(__assign({}, user1), user2);
var Name = mergedUser.Name, Age = mergedUser.Age, otherDetails = __rest(mergedUser, ["Name", "Age"]);
console.log("Name:", Name);
console.log("Age:", Age);
console.log("Other Details:", otherDetails);

// How do you determine if a string is a palindrome?
function isPalindrome(str) {
    var cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    var reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
var tString = "A man, a plan, a canal: Panama";
console.log("Is \"".concat(tString, "\" a palindrome?"), isPalindrome(tString));

// How do you determine if a string is a palindrome?

function isPalindrome(str: string): boolean {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}


const tString = "A man, a plan, a canal: Panama";
console.log(`Is "${tString}" a palindrome?`, isPalindrome(tString));

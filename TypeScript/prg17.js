// How do you calculate the number of vowels and consonants in a string?
function countVowelsAndConsonants(input) {
    var vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);
    var vowels = 0;
    var consonants = 0;
    for (var _i = 0, _a = input.toLowerCase(); _i < _a.length; _i++) {
        var char = _a[_i];
        if (/[a-z]/.test(char)) {
            if (vowelsSet.has(char)) {
                vowels++;
            }
            else {
                consonants++;
            }
        }
    }
    return { vowels: vowels, consonants: consonants };
}
var result = countVowelsAndConsonants("Hello, World!");
console.log("Vowels: ".concat(result.vowels, ", Consonants: ").concat(result.consonants));

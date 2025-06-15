// How do you calculate the number of vowels and consonants in a string?
function countVowelsAndConsonants(input: string): { vowels: number; consonants: number } {
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);
    let vowels = 0;
    let consonants = 0;

    for (const char of input.toLowerCase()) {
        if (/[a-z]/.test(char)) {
            if (vowelsSet.has(char)) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    return { vowels, consonants };
}


const result = countVowelsAndConsonants("Hello, World!");
console.log(`Vowels: ${result.vowels}, Consonants: ${result.consonants}`);


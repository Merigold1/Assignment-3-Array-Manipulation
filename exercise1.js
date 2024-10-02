
// Muhamad Raihan Ramadhansyah

function isArithmeticProgression(numbers) {

    let gap = numbers[1] - numbers[0];

    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] - numbers[i - 1] !== gap) {
            return false
        } // early exit
    }
    return true
}

console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 4, 6, 9])); // false
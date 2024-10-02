
// Muhamad Raihan Ramadhansyah

function sumArray(arr, int) {
    let sum = [];

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] === int) {

                sum.push([arr[i], arr[j]]);

            }
        }
    }

    return sum;
}

console.log(sumArray([2, 1, 4, 3], 5)); // Output: [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // Output: [[1, 10], [8, 3]]
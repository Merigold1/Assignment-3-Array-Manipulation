
// Muhamad Raihan Ramadhansyah

function arrSum(arr){
    let maxSum = arr[0];
    let currentSum = arr[0];
    let head = 0;
    let tail = 0;
    let newHead = 0;
    
    for(let i = 1; i < arr.length; i++){

        if(arr[i] > currentSum + arr[i]){
            currentSum = arr[i];
            newHead = i;
        }else{
            currentSum += arr[i];
        }

        if(currentSum > maxSum){
            maxSum = currentSum;
            head = newHead;
            tail = i;
        }

    }

    return [arr.slice(head, tail + 1), maxSum]
}

var a = [-2, -3, 4, -1, -2, 1, 5, -3]; //output : [ [ 4, -1, -2, 1, 5 ], 7 ]
console.log(arrSum(a)); 
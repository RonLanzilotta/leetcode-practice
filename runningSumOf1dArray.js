let nums = [3, 1, 2, 10, 1]

const runningSum = function(arr) {
    let output = [];
    output[0] = arr[0]
    for (let i = 1; i < arr.length; i++) {
        output[i] = output[i - 1] + arr[i]
    }
    return output;
}

console.log(runningSum(nums))
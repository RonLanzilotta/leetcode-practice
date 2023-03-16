let input = [2, 1, -1]

function findPivot(arr) {

    let leftSum = 0; 
    let rightSum = 0;
    
    for (let pivotIndex = 0; pivotIndex < arr.length; pivotIndex++){
        for (let i = 0; i < arr.length; i++) {

            if (i < pivotIndex) {
                leftSum += arr[i]
            } else if (i > pivotIndex) {
                rightSum += arr[i]
            } else if (pivotIndex === 0) {
                leftSum = 0;
            } else if (pivotIndex === arr.length - 1) {
                rightSum = 0;
            } 
        }

        if (leftSum == rightSum) { 
            return pivotIndex
        } else {
            leftSum = 0
            rightSum = 0
        }
    } 
    return -1
}

console.log(findPivot(input))
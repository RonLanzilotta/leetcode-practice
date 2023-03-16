let input = [1,7,3,6,5,6,7]

// function iterator(leftSum, rightSum, num) {
//     if (leftSum < rightSum) { num =+ 1 } 
//     if (leftSum > rightSum) { num =- 1 }
// }

function findPivot(arr) {

    let leftSum = 0; 
    let rightSum = 0;

    for (let pivotIndex = Math.floor(arr.length / 2); 0 <= pivotIndex < arr.length; pivotIndex++) {

        for (let i = 0; i < arr.length; i++) {

            if (i < pivotIndex) {
                leftSum += arr[i]
            }
            
            if (i > pivotIndex) {
                rightSum += arr[i]

            } else if (pivotIndex === 0) {
                leftSum = 0;

            } else if (pivotIndex === arr.length - 1) {
                rightSum = 0;

            }
        }

        if (leftSum == rightSum) { 
            return pivotIndex

        } else if (leftSum < rightSum) {
            pivotIndex++

        } else if (leftSum > rightSum) {
            pivotIndex--
            
        } else { 
            return -1 
        }
    }
}

console.log(findPivot(input))
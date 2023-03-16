let input = [2, 1, -1]

function findPivot(arr) {

    let leftSum = 0; 
    let rightSum = 0;
    // let pivotIndex = 0;
    // let pivotIndex = Math.floor(arr.length / 2);

    // while(0 <= pivotIndex < arr.length ){
        // console.log(`current pivot index: ${pivotIndex}`)

    for (let pivotIndex = 0; pivotIndex < arr.length; pivotIndex++){
        console.log(pivotIndex)
        // breaks arr into leftSum + rightSum based on 
        for (let i = 0; i < arr.length; i++) {

            if (i < pivotIndex) {
                leftSum += arr[i]
            } else if (i > pivotIndex) {
                rightSum += arr[i]
            } else if (pivotIndex === 0) {
                leftSum = 0;
            } else if (pivotIndex === arr.length - 1) {
                rightSum = 0;
            } console.log('end loop 1')
        }

        if (leftSum == rightSum) { 
            console.log('success')
            return pivotIndex
        } else {
            leftSum = 0
            rightSum = 0
        }
    } 
    console.log('fail') 
    return -1
}

console.log(findPivot(input))
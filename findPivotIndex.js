let input = [1, 7, 3, 6, 5, 6]

function findPivot(arr) {
    let leftSum = []; 
    let rightSum = [];
    let pivotIndex = Math.floor(arr.length / 2);

    for (let i = 0; i < arr.length; i++) {
        if (i < pivotIndex) {
            leftSum.push(arr[i]) 
        } else if (i > pivotIndex) {
            rightSum.push(arr[i])
        } else {
            continue
        }
    }
    console.log(leftSum)
    console.log(rightSum)
}

findPivot(input)
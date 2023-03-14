var numberOfArithmeticSlices = function(nums) {
    let arr = [];
    let j = i + 1;
    for(let i = 0; i < nums.length; i++) 
        if (nums.length < 3) {
            return console.log(0);
        } else if 
        ((nums[j] - nums[i]) === (nums[j + 1] - nums[j])) {
            arr.push([i, j, (j + 1)])
        }
    }
    return console.log(arr.length + 1)
};

numberOfArithmeticSlices([3, -1, -5, -9, -13, -17, -20])
// leetcode - 283

const nums = [0, 1, 0, 3, 12];

const moveZeros = function (nums) {
    let k = 0;
    let temp = null;

    for (let i = 0; i < nums.length; i++) {
        // Pushing all non zero's to the front
        if (nums[i] !== 0) {
            temp = nums[i];
            nums[i] = nums[k];
            nums[k] = temp;
            k++;
        }
    }
}

moveZeros(nums);
console.log(nums);

// Largest element in an array

const nums = [8, 10, 5, 7, 9];

console.log(nums);

let max = 0;
for(let i=1; i<nums.length; i++) {
    if (nums[i] > nums[max]) {
        max = i;
    }
}

console.log(`Largest element is ${nums[max]}`)

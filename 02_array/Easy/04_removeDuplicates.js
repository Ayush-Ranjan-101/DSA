const nums = [0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);
console.log(k);
console.log(nums.slice(0,k));

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    // Represents the number of unique elements
    // Since first element is already unique we start with k = 1
    let k = 1;
    for(let i = 1; i < nums.length; i++) {
        // Checks current with previous element
        if(nums[i] !== nums[i-1]) {
            nums[k] = nums[i];
            k++;  
        }
    }
    return k;
}

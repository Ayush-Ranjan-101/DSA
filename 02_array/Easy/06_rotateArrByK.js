let nums = [1, 2, 3, 4, 5, 6, 7];
rotateArr(nums, 3);
console.log(nums);

function rotateArr(nums, k) {
    if (nums.length === 0) return;
    
    const n = nums.length;
    k = k % n;

    const temp = nums.slice(n-k);

    for (let i = n - k -1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }

    for (let i = 0; i < k; i++) {
        nums[i] = temp[i];
    }
}

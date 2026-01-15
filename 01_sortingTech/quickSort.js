const nums = [10, 7, 8, 9, 1, 5];
console.log(nums);
quickSort(nums, 0, nums.length-1);
console.log(nums);

function quickSort(nums, l, h) {
    if (l < h) {
        const idx = partition(nums, l, h);
        quickSort(nums, l, idx-1); // Sort left portion
        quickSort(nums, idx+1, h); // Sort right portion
    }
}

function partition(nums, l, h) {
    // Pivot = last element
    const pivot = nums[h];
    let i = l;

    for (let j = l; j < h; j++) {
        if(nums[j] < pivot) {
            // Swap makes smaller elements go first
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
        }
    }

    // Placing pivot right after all elements 
    // smaller than pivot
    let temp = nums[i];
    nums[i] = nums[h];
    nums[h] = temp;

    return i;
}

// leetcode - 153

const nums = [3, 4, 5, 1, 2];

const findMin = function  (nums) {
    let start = 0, end = nums.length - 1;

    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (nums[mid] > nums[end]) {
            // Minimum lies in the right half
            start = mid + 1;
        } else {
            // Minimum lies in the left half
            end = mid - 1;
        }
    }

    return nums[start];
}

console.log(findMin(nums))

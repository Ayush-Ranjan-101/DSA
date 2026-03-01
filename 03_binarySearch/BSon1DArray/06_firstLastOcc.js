// leetcode - 34

const nums = [5,7,7,8,8,10];

const searchRange = function  (nums, target) {
    const n = nums.length;
    if (n === 0) return [-1, -1];

    // Finding last occurence of the target
    let left = 0, right = n - 1;
    let lastIdx = -1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] === target) {
            lastIdx = mid;
            left = mid + 1;  // Search last occurence
        } else if (target < nums[mid]) {
            right = mid - 1;  // Move left
        } else {
            left = mid + 1;   // Move right
        }
    }

    if (lastIdx === -1) return [-1, -1];

    // Finding first occurence of the target
    left = 0; right = lastIdx;
    let firstIdx = -1;
    
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] === target) {
            firstIdx = mid;
            right = mid - 1;  // Search first occurence
        } else if (target < nums[mid]){
            right = mid - 1;  // Move left
        } else {
            left = mid + 1;   // Move right
        }
    }


    return [firstIdx, lastIdx];
}

console.log(searchRange(nums, 6));

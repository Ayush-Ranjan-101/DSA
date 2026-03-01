// gfg (https://www.geeksforgeeks.org/problems/implement-lower-bound/1)

const nums = [2, 3, 7, 10, 11, 11, 25];

const lowerBound = function  (nums, target) {
    let left = 0, right = nums.length - 1;
    let ans = nums.length;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1; // Move left
        } else {
            left = mid + 1;  // Move right
        }
    }

    return ans;
}

console.log(lowerBound(nums, 11));

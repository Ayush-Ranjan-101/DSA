// leetcode - 15

const nums = [-1, 0, 1, 2, -1, -4];

const threeSum = function  (nums) {
    const n = nums.length;
    const res = [];
    // Sort in ascending order
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
        // Since nums[i] is +ve, left and right will be +ve 
        // therefore sum never = 0
        if (nums[i] > 0) break;

        // Skip duplicates
        if (i > 0 && nums[i] === nums[i-1]) continue;
        
        let left = i + 1, right = n - 1;

        // Pairs for current nums[i]
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                // Skip duplicates for left and right pointer
                while (left < right && nums[left] === nums[left -1]) left++;
                while (left < right && nums[right] === nums[right +1]) right --;
            }
        }

    }

    return res;
}

console.log(threeSum(nums));

// Time complexity : O(n^2) (sort get overshadowed : O(n logn))
// Space complexity : O(1) or O(n) (worst case sorting)

// leetcode - 18

const nums = [4,3,3,4,4,2,1,2,1,1];

const fourSum = function  (nums, target) {
    const n = nums.length;
    if (n < 4) return [];

    const res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 3; i++) {
        // Skip duplicates
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // If the 4 smallest elements are > target, no need to look further
        if (nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target) break;
        // If nums[i] + 3 largest elements < target, i is too small
        if (nums[i] + nums[n-3] + nums[n-2] + nums[n-1] < target) continue;

        for (let j = i + 1; j < n - 2; j++) {
            // Skip duplicates
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            // If the 4 smallest elements are > target, no need to look further
            if (nums[i] + nums[j] + nums[j+1] + nums[j+2] > target) break;
            //  Largest sum with current i and j is too small
            if (nums[i] + nums[j] + nums[n-2] + nums[n-1] < target) continue;

            // Two pointer
            let left = j + 1, right = n - 1;
            // Find pairs for nums[i] and nums[j]
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum > target) {
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;

                    // Skip duplicates for left and right
                    while (left < right && nums[left] === nums[left -1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;
                }
            }
        }
    }

    return res;
}

console.log(fourSum(nums, 9))

// Time complexity : O(n^3)
// Space complexity : O(1) or O(n) (worst case sorting)

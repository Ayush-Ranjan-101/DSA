// leetcode - 1004

const nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2;

const longestOnes = function  (nums: number[], k: number): number {
    if (k === nums.length) return nums.length;

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        // decrement k by 1 if 0 encountered
        if (nums[right] === 0) k--;

        // if K less than 0, means an extra flip was made. 
        // So skrink the window from left
        while (k < 0) {
            // element leaving the window is 0 then you got one flip back, 
            // which will be used to balance the extra flip 
            if (nums[left] === 0) k++;
            left++;
        }

        maxLength = Math.max(maxLength, (right - left) + 1);
    }

    return maxLength;
}
// n - length of nums
// for loop - O(n), traversing nums array
// while loop - O(n), It is triggered only when run out of flips.
// if nums is all zeros and k = nums.length - 1 then it's O(n-1) => O(n)
// Time complexity - O(n) + O(n) => O(2n) => O(n)
//
// Space complexity - O(1), constant space, not storing array values or index

console.log(longestOnes(nums, k));

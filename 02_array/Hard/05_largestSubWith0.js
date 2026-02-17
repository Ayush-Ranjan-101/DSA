// geeks for geeks (https://www.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1)

const nums = [15, -2, 2, -8, 1, 7, 10, 23];

const maxLength = function  (nums) {
    const prefixSum = new Map();
    let maxLength = 0, sum = 0;

    // Initialize: Sum of 0 seen at index -1
    prefixSum.set(0, -1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (prefixSum.has(sum)) {
            maxLength = Math.max(maxLength, i - prefixSum.get(sum));
        } else {
            prefixSum.set(sum, i);
        }
    }

    return maxLength;
}

console.log(maxLength(nums));

// Time complexity : O(n)
// Space complexity : O(n)

// leetcode - 560

const nums = [-1, -1, 1];

const subarraySum = function  (nums, k) {
    let sum = 0, count = 0;
    // frequency of subarrays with similar sum
    const prefixSum = new Map();

    // For situtions where sum === k therefore remove = 0
    prefixSum.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        // shows the subarrays that if removed results in k
        const remove = sum - k;
        if (prefixSum.has(remove)) {
            count += prefixSum.get(remove)
        }

        // Increment frequency for future ith indices
        prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
    }

    return count;
}

console.log(subarraySum(nums, 0));

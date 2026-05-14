// gfg (https://www.geeksforgeeks.org/problems/check-if-there-exists-a-subsequence-with-sum-k/1)

const nums = [10, 1, 2, 7, 6, 1, 5];
const k = 8;

const checkSubsequenceSum = function  (nums, k) {
    const sequences = function  (sum, index) {
        // Base case 1 : Any addition to the current sum will never result in k
        if (sum === k) return true;

        // Base case 2 : return if no numbers left to added or 
        // no more addition to sum will result in k
        if (index >= nums.length || sum > k) return false;

        // short-circuiting - stopping traversal as soon as true in found
        const result = sequences(sum + nums[index], index + 1) || 
        sequences(sum, index + 1);

        return result;
    }

    return sequences(0, 0);
}
// Time complexity - O(2^n), each recursion stack makes two other stack calls
// either include or exclude the current number
// Space complexity - O(n), max depth of the recursion stack

console.log(checkSubsequenceSum(nums, k));

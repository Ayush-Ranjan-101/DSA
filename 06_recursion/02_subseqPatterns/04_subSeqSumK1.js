const nums = [4, 2, 10, 5, 1, 3];
const k = 5;

const subSeqWithSumK = function  (nums, k) {

    const subsequences = function  (sum, index) {
        // Base case 1 : any adition to current sum will never result in k
        if (sum === k) return 1;
        
        // Base case 2 : return if no numbers left to added or 
        // no more addition to sum will result in k
        if (index >= nums.length || sum > k) return 0;

        // Include the current number
        const include = subsequences(sum + nums[index], index + 1);
        // Exclude the current number
        const exclude = subsequences(sum, index + 1);

        return include + exclude;
    }

    return subsequences(0, 0);
}
// n - length of given array
// Time complexity : O(2^n), each recursion stack makes two other stack calls
// Space complexity : O(n), max depth of the recursion stack

console.log(subSeqWithSumK(nums, k));

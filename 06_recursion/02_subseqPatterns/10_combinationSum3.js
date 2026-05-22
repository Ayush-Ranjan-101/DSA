// leetcode - 216

const k = 3, n = 9

const combinationSum3 = function d (k, n) {
    const result = [];
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const subsets = (sum, startIndex, currElements) => {
        // Valid subset found
        if (currElements.length === k && sum === n) {
            // Storing a deep copy of the subset
            result.push([...currElements]);
            // addition of any new number will exceed sum and k size limit
            return;
        }

        // Base case : Exceeds k size or sum > n
        if (currElements.length > k || sum > n) return;

        // Either include or exclude the current element and form a subset
        for (let i = startIndex; i < nums.length; i++) {
            currElements.push(nums[i]);
            // Move to next index since each element can be used exactly once
            subsets(sum + nums[i], i + 1, currElements);
            currElements.pop();
        }
    }

    subsets(0, 0, []);
    return result;
}
// Generating subset - O(C(9, k)), binomial coefficient(9, k) limited to 1-9
// Deep copy of a subset - O(k)
// Time complexity - O(k * C(9, k)), effectively O(1)
//
// Recursion stack - O(k)
// currElements size - O(k)
// Space complexity - O(k)
// Output array size - O(k * C(9, k)), each combination is of length k and 
// no.of combinations is C(9, k)

console.log(combinationSum3(k, n));

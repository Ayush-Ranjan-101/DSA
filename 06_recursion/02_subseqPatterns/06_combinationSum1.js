// leetcode - 39

const candidates = [2, 3, 5];
const target = 7

const combinationSum = function  (candidates, target) {
    const result = [];

    const subsequences = (sum, index, currElements) => {
        // Base case 1 : we found a valid combination
        if (sum === target) {
            // Push a shallow copy as original array is mutated
            // during backtracking
            result.push([...currElements]);
            return;
        }

        // Base case 2 : index out of bound (no more candidates left)
        if (index >= candidates.length) return;

        // Only pick if adding it does not exceed the target
        if (sum + candidates[index] <= target) {
            currElements.push(candidates[index]);
            // Staying at the same index to reuse the same number
            subsequences(sum + candidates[index], index, currElements);
            currElements.pop();
        }
        // Move to the next index to try different numbers
        subsequences(sum, index + 1, currElements);
    }

    subsequences(0, 0, []);
    return result;
}
// t - the target value
// k - the number of candidates(length of the array)
// Time complexity - O(2^t * k)
// If your target is 10 and your smallest candidate is 1, you could pick 1 ten times.
// So the depth is determined by the target (t), 
// not just the number of candidates (k).
//
// Space complexity - O(t) , the current stack depth and currElements array
console.log(combinationSum(candidates, target));

// leetcode - 40

const candidates = [2, 5, 2, 1, 2];
const target = 5;

const combinationSum2 = function  (candidates, target) {
    const result = [];
    // Sort to handle duplicates
    candidates.sort((a, b) => a - b);

    const subsequences = (sum, startIndex, currElements) => {
        // Base case 1 : found the target
        if (sum === target) {
            // Storing a deep copy to handle backtracking mutation
            result.push([...currElements]);
            return;
        }

        // Base case 2 : Exceeds the target
        if (sum > target) return;

        for (let i = startIndex; i < candidates.length; i++) {
            // The current and later on elements will never result in target
            if (candidates[i] > target) break;

            // Skip duplicates at the same level, since no other duplicates 
            // should hold the same position as the current element.
            // It may form the same subset again
            // i > startIndex ensures we pick a duplicate for am index
            if (i > startIndex && candidates[i] === candidates[i - 1]) {
                continue;
            }
            currElements.push(candidates[i]);
            // Move to next index (i + 1) since each number can be used only ones
            subsequences(sum + candidates[i], i + 1, currElements);
            currElements.pop();
        }
    }

    subsequences(0, 0, []);
    return result;
}
// Generating subset, either include or exlude the current element - O(2^n)
// Copying combination, creating a deep copy and storing it - O(n)
// Time complexity - O(2^n * n)
// Sorting - O(n log n) ,but gets overshadowed by O(2^n * n)
//
// Recursion stack - O(n)
// currElements operatin - O(n)
// Sorting space - O(n) or O(log n)
// Space complexity - O(n)

console.log(combinationSum2(candidates, target));

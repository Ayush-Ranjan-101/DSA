// leetcode - 78

const nums = [1, 2, 3];

const subset = function  (nums) {
    const result = [];

    const generate = (index, currElements) => {
        // Base case : index out of bound
        if (index >= nums.length) {
            // Store the subset formed
            result.push([...currElements]);
            return;
        }

        // Include the current element to form a subset
        currElements.push(nums[index]);
        generate(index + 1, currElements);
        // Exclude the current element to form a subset
        currElements.pop();
        generate(index + 1, currElements);
    }
    generate(0, []);
    return result;
}
// generating subset - O(2^n), two recursive stack calls to either include or exclude
// copying combinations - O(n), creating a shollow copy and storing it 
// Time complexity - O(2^n * n)
//
// Recursion stack - O(n)
// currElements operation - O(n)
// Auxiliary space - O(n)
// Space complexity - O(n * 2^n), there a 2^n subsets

console.log(subset(nums));

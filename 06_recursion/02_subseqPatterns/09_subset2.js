// leetcode - 90

const nums = [1, 2, 2];

const subsetsWithDup = function  (nums) {
    const result = [];
    // Sort to handle duplicates
    nums.sort((a, b) => a - b);

    const generate = (startIndex, currElements) => {
        // Store a deep copy of the subset formed so far including []
        result.push([...currElements]);

        // Base case : Index out of bound handled by for loop (i < nums.length)
        for (let i = startIndex; i < nums.length; i++) {
            // Skip the duplicates from being inserted at the same index,
            // this may result in a duplicate subset
            if (i > startIndex && nums[i] === nums[i-1]) continue;
        
            currElements.push(nums[i]);
            // move to the next index, since each ith element 
            // can be inserted only once per index
            generate(i + 1, currElements);
            currElements.pop();
        }
    }

    generate(0, []);
    return result;
}
// 2^n subsets if no duplicates
//
// Generating subsets - O(2^n), either including or excluding the elements 
// Creating and storing a deep copy - O(n)
// Time complexity - O(2^n * n)
// Sorting - (n log n), but gets overshadowed by O(2^n * n)
//
// Recursion stack - O(n)
// currElements space - O(n)
// Sorting space - O(n) or O(log n)
// Auxiliary space - O(n)
// Output space - O(2^n)
// Space complexity - O(n)
// Total space complexity - O(n * 2^n)

console.log(subsetsWithDup(nums));

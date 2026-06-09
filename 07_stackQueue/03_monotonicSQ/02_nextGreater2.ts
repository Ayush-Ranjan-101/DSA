// leetcode - 503

const nums = [1,2,3,4,3];

const nextGreaterElements = function  (nums: number[]) : number[] {
    // Monotonic decreaing stack to store the next greater elements
    const stack: number[] = [];

    // Initialize the result array with -1. If no greater element is found
    const result: number[] = new Array(nums.length).fill(-1);
    const n = nums.length;

    // loop 2n - 1 down to 0 to simulate circular array 
    // This allows elements near the end to loop at elements from the beginning
    for (let i = n * 2 - 1; i >= 0; i--) {
        // Use % to map virtual index i with valid index
        const idx = i % n;

        const num = nums[idx]!;

        // Maintaining the monotonic stack
        while(stack.length! > 0 && num >= stack[stack.length - 1]!) {
            stack.pop();
        }
        
        // If stack is not empty the element at the top of stack is 
        // the next greater element
        if (stack.length > 0) {
            result[idx] = stack[stack.length - 1]!;
        }

        // Pushing the current element back to the stack as it can be the
        // potential greater element
        stack.push(num);
    }

    return result;
}
// for loop - O(2n) => O(n), loopiing twice the nums array, also includes push() 
// operation that runs O(2n) times in total
// while loop - O(2n) => O(n), pop() runs total of O(2n)
// Time complexity - O(n)
//
// stack - O(n), stack size directly proportional to nums 
// result - O(n), result array also directly proportional to nums
// Space complexity - O(2n) => O(n)

console.log(nextGreaterElements(nums))

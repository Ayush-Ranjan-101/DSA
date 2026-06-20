// leetcode - 2104

const nums = [1, 2, 3];

const subArrayRanges = function  (nums: number[]): number {
    const n = nums.length;
    let totalSum = 0;

    // 1. Calculate sum of all maximums
    let maxStack = [];
    for (let i = 0; i <= n; i++) {
        // Use Infinity as a dummy value at index 'n' to clear the stack
        let currentVal = (i === n) ? Infinity : nums[i]!;
        
        while (maxStack.length > 0 && nums[maxStack[maxStack.length - 1]!]! < currentVal) {
            let mid = maxStack.pop()!;
            let left = (maxStack.length > 0) ? maxStack[maxStack.length - 1]! : -1;
            let right = i;
            
            totalSum += nums[mid]! * (mid - left) * (right - mid);
        }
        maxStack.push(i);
    }

    // 2. Calculate sum of all minimums (and subtract from totalSum)
    let minStack = [];
    for (let i = 0; i <= n; i++) {
        // Use -Infinity as a dummy value at index 'n' to clear the stack
        let currentVal = (i === n) ? -Infinity : nums[i]!;
        
        while (minStack.length > 0 && nums[minStack[minStack.length - 1]!]! > currentVal) {
            let mid = minStack.pop()!;
            let left = (minStack.length > 0) ? minStack[minStack.length - 1]! : -1;
            let right = i;
            
            totalSum -= nums[mid]! * (mid - left) * (right - mid);
        }
        minStack.push(i);
    }

    return totalSum;
}

console.log(subArrayRanges(nums));

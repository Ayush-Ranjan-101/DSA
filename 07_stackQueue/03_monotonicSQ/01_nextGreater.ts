// leetcode - 496

const num1 = [4, 1, 2];
const num2 = [1, 3, 4, 2];

// Monotonic stack algorithm
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const result: number[] = new Array
    const map  = new Map<number, number>();
    const stack: number[] = [];

    for (let i = nums2.length - 1; i >= 0; i--) {
        const num = nums2[i]!;
        while(stack.length! > 0 && num >= stack[stack.length - 1]!) {
            stack.pop();
        }
        map.set(num, stack[stack.length - 1]!);
        stack.push(num);
    }

    for (const num of nums1) {
        result.push(map.get(num) ?? -1);
    }

    return result;
};
// n - length of nums1 and m - length of nums2
// first loop - O(m)
// second loop - O(n)
// Time complexity - O(m + n), since the loops run one after the another
//
// Space complexity - O(n)

console.log(nextGreaterElement(num1, num2));

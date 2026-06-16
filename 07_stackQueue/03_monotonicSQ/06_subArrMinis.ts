// leetcode - 907

const arr = [3, 1, 2, 4];

const sumSubarrayMins = function  (arr: number[]): number {
    const n = arr.length;

    // Next smaller element to the left
    const nsl = function  (arr: number[]): number[] {
        const res: number[] = new Array(n);
        const stack: number[] = [];

        for (let i = 0; i < n; i++) {
            while (stack.length > 0 && arr[i]! < arr[stack[stack.length - 1]!]!) {
                stack.pop();
            }

            res[i] = stack[stack.length - 1] ?? -1;

            stack.push(i);
        }

        return res;
    }

    // Next smaller element to the right
    const nsr = function  (arr: number[]): number[] {
        const res: number[] = new Array(n);
        const stack: number[] = [];

        for (let i = n - 1; i >= 0; i--) {
            while (stack.length > 0 && arr[i]! <= arr[stack[stack.length - 1]!]!) {
                stack.pop();
            }

            res[i] = stack[stack.length - 1] ?? n;

            stack.push(i);
        }

        return res;
    }

    const MOD = 1e9 + 7;

    let totalSum = 0;
    // nsl and nsr together define the range till arr[i] is the smallest
    // this range is the subarrays in which arr[i] is the smallest
    const left = nsl(arr);
    const right = nsr(arr);

    for (let i = 0; i < arr.length; i++) {
        const leftCount = i - left[i]!;  // Elements on the left
        const rightCount = right[i]! - i;  // Elements on the right

        // Keeping anwser within the modulo
        const subArrays = (leftCount * rightCount) % MOD; 
        const elementContribution = (subArrays * arr[i]!) % MOD;
        totalSum = (totalSum + elementContribution) % MOD;
    }

    return totalSum;
}
// n - length of arr
// Time complexity - O(n), nsl() and nsr() take O(n) time 
// Space complexity - O(n), stack and storing next smaller left and right in 
// an result array takes O(n) space

console.log(sumSubarrayMins(arr));

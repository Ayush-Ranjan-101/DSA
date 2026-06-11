// gfg (https://www.geeksforgeeks.org/problems/immediate-smaller-element1142/1)

const arr = [4, 8, 5, 2, 25];

const nextSmaller = function  (arr: number[]): number[] {
    const stack: number[] = [];
    const result: number[] = new Array(arr.length).fill(-1);

    for (let i = arr.length - 1; i >= 0; i--) {
        const num = arr[i]!;
        while(stack.length > 0 && num <= stack[stack.length - 1]!) {
            stack.pop();
        }

        if (stack.length > 0) {
            result[i] = stack[stack.length - 1]!
        }

        stack.push(num);
    }

    return result;
}
// Time complexity - O(n), n is length of arr 
// Space complexity - O(n), 

console.log(nextSmaller(arr));

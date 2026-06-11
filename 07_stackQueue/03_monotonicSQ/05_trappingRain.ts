// leetcode - 42

const height = [1, 2, 3, 2, 4];

const trap = function  (height: number[]): number {
    let totalWater = 0;
    const stack: number[] = [];

    for (let i = 0; i < height.length; i++) {
        // If stack empty there is no left bar and if current bar shorter there 
        // is no right bar
        while (stack.length > 0 && height[i]! >= height[stack[stack.length - 1]!]!) {
            const mid = stack.pop()!;

            // Found a new left boundary or first left boundary 
            // in between the array
            if (stack.length === 0) {
                break;
            }

            // Extracting left and right bar indexes
            const leftIdx = stack[stack.length - 1]!;
            const rightIdx = i;

            // min(leftBar, rightBar) - midBar(floor)
            const boundedHeight = Math.min(height[leftIdx]!, height[rightIdx]!)
            - height[mid]!;
            // No.of spaces between bars
            const width = rightIdx - leftIdx - 1;
            totalWater += boundedHeight * width
        }

        // Adding current bar to its place in the monotonic decreasing stack
        stack.push(i);
    }

    return totalWater;
}
// n - length of height array
// for loop - O(n)
// while loop - O(n) - total pop() operations = push() operations and push()
// operation runs for elements of height array i.e total of O(n) times at most
//
// Space complexity - O(n), stack stores all elements of height array in 
// worst case height = [5, 4, 3, 2, 1] something like this

console.log(trap(height));

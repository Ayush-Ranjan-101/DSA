// gfg (https://www.geeksforgeeks.org/problems/number-of-nges-to-the-right/1)

const arr = [3, 4, 2, 7, 5, 8, 10, 6];
const indices = [0, 5];

const count_NGE = function  (arr: number[], indices: number[]): number[] {
    const result: number[] = [];

    // Process each query index directly
    for (let i = 0; i < indices.length; i++) {
        const targetIdx = indices[i]!;
        const targetValue = arr[targetIdx]!;
        let greaterCount = 0;

        // Count all elements to the right that are strictly greater
        for (let j = targetIdx + 1; j < arr.length; j++) {
            if (arr[j]! > targetValue) {
                greaterCount++;
            }
        }

        result.push(greaterCount);
    }

    return result;
}
// Q - indices.length
// N - arr.length
// Time complexity - O(Q * N)
//
// Space complexity - O(1), constant space

console.log(count_NGE(arr, indices));

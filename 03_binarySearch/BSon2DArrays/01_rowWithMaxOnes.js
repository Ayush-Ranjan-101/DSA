// gfg (https://www.geeksforgeeks.org/problems/row-with-max-1s0023/1)

const nums = [[1, 1, 1], [0, 0, 1], [0, 0, 0]];

const countOnes = function  (nums) {
    let start = 0, end = nums.length - 1;
    // If no 1 is found the return equation will equal zero
    let firstOneIdx = nums.length;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        
        if (nums[mid] === 1) {
            firstOneIdx = mid;
            // try smaller idx as there migth be 1 before it
            end = mid - 1;
        } else {
            // try bigger idx as there might be 1
            start = mid + 1;
        }
    }

    return nums.length - firstOneIdx;
}

const rowWithMax1s = function  (nums) {
    let rowIdx = -1, maxCount = 0;

    for (let i = 0; i < nums.length; i++) {
        const currentCount = countOnes(nums[i]);
        if (currentCount > maxCount) {
            rowIdx = i;
            maxCount = currentCount;
        }
    }

    return rowIdx;
}
// Time complexity - O(n * log(m)) , n - no.of rows , m - no.of columns
// Space complexity - O(1)

console.log(rowWithMax1s(nums));

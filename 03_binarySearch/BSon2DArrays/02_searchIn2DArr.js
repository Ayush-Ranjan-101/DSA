// leetcode - 74

const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3;

const binarySearch = function  (nums, target) {
    let start = 0, end = nums.length -1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (target < nums[mid]) {
            end = mid - 1;
        } else if (target > nums[mid]){
            start = mid + 1;
        } else {
            return true;
        }
    }
    return false;
}

const searchMatrix = function  (matrix, target) {
    const cols = matrix[0].length;
    let start = 0, end = matrix.length - 1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (matrix[mid][0] <= target && matrix[mid][cols - 1] >= target) {
            return binarySearch(matrix[mid], target);
        } else if (target < matrix[mid][0]){
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return false;
}
// Time complexity - O(log(n * m)) / O(log n + log m) , n - no.of rows , m - no.of columns
// Space complexity - O(1)

const matrixBinarySearch = function  (matrix, target) {
    // n - no.of rows and m - no.of columns
    const n = matrix.length;
    const m = matrix[0].length;

    let start = 0, end = m * n - 1;
    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        // Convert 1D index to 2D indices
        const row = Math.floor(mid / m);
        const col = mid % m;

        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return false;
}
// Time complexity - O(log(n * m)) / O(log n + log m) , n - no.of rows , m - no.of columns
// Space complexity - O(1)

console.log(searchMatrix(matrix, target));
console.log(matrixBinarySearch(matrix, target));

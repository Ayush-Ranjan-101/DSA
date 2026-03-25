// leetcode - 240

const matrix = [
    [1,4,7,11,15],
    [2,5,8,12,19],
    [3,6,9,16,22],
    [10,13,14,17,24],
    [18,21,23,26,30]
],target = 14;

const searchMatrix = function  (matrix, target) {
    const rows = matrix.length;
    let row = 0, col = matrix[0].length - 1;

    // standing on the last element of 0th row the elements below it are greater
    // and elements before it are smaller. we are taking advantage of that here
    while (row < rows && col  > -1) {
        // If target smaller than it might be behind the current element
        if (matrix[row][col] > target) {
            col--;
        } else if (matrix[row][col] < target) {
            //If target bigger than it might be below the current element
            row++;
        } else {
            return true
        }
    }
    return false;
}

console.log(searchMatrix(matrix, target));

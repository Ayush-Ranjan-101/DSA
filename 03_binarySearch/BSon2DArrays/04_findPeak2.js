// leetcode - 1901

const mat = [
    [10,20,15],
    [21,30,14],
    [7,16,32]
]

const maxElementIdx = function  (mat, col) {
    let max = 0, idx = -1;
    for (let i = 0; i < mat.length; i++) {
        if (mat[i][col] > max) {
            max = mat[i][col];
            idx = i;
        }
    }
    return idx;
}

const findPeakGrid = function  (mat) {
    let start = 0, end = mat[0].length - 1;
    const cols = end;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        const row = maxElementIdx(mat, mid);

        const midVal = mat[row][mid];
        const left = mid > 0 ? mat[row][mid - 1] : -1;
        const right = mid < cols ? mat[row][mid + 1] : -1;

        if (midVal < left) {
            // peak must exist somewhere left
            end = mid - 1;
        } else if (midVal < right) {
            // peak must exist somewhere right
            start = mid + 1;
        } else {
            return [row, mid];
        }
    }
    return [-1, -1];
}
// Time complexity - O(n log m), n - no.of rows, m - no.of cols
// Space complexity - O(1);

console.log(findPeakGrid(mat));

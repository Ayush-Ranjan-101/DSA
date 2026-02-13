// leetcode - 54

const matrix = [[1,2,3],[4,5,6],[7,8,9]]

const spiralOrder = function  (matrix) {
    let res = [];

    let top = 0, left = 0;
    let bottom = matrix.length -1, right = matrix[0].length -1;

    while (top <= bottom && left <= right) {

        // Traverse left -> right along the top row
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        top++;

        // Traverse top -> bottom along the right column
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        right--;

        // Traverse right -> left along the bottom row
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                res.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Traverse bottom -> top along the left column
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                res.push(matrix[i][left]);
            }
            left++;
        }
    }

    return res;
}

console.log(spiralOrder(matrix));

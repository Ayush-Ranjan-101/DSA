// leetcode - 51

const n = 4;

const solveQueens = function  (n: number): string[][]{
    const result: string [][] = [];

    // An empty chess board
    const board: string[][] = Array.from({ length: n }, () => Array(n).fill("."));
   
    // Track occupied lines
    const cols = new Set<number>();
    const posDiag = new Set<number>();
    const negDiag = new Set<number>();
    // Not tracking rows as next row queens position is only affected by the
    // earlier queens cols and diagonals

    const placeNQueens = (row: number) => {
        // Base case : successfully places queens in all rows
        if (row === n) {
            result.push(board.map(r => r.join('')));
            return;
        }

        let boardRow = board[row];
        if (!boardRow) return;

        for (let col = 0; col < n; col++) {
            // If current position is under the scope of a queen skip it
            if (cols.has(col) || posDiag.has(row + col) || negDiag.has(row - col)) {
                continue;
            }


            // Place the queen and mark the column and diagonal it covers
            boardRow[col] = "Q"
            cols.add(col);
            posDiag.add(row + col);
            negDiag.add(row - col);

            // Move to the next row
            placeNQueens(row + 1);

            // Backtracking - Removing the queens to try a different position
            boardRow[col] = "."
            cols.delete(col);
            posDiag.delete(row + col);
            negDiag.delete(row - col);
        }
    }

    placeNQueens(0);
    return result;
}
// Storing result with conversion - O(S * n^2), S total valid solutions and 
// n^2 - time taken for copying the 2d array 
// Time complexity - O(n!) - As we go down the board, the number of 
// valid choices drops drastically n * n - 2 * n - 4 * ... * 1
//
// Chess board storage - O(n^2)
// Lookup sets - O(n)
// Recursion call stack - O(n)
// Space complexity - O(n^2)
// Output space - O(S * n^2), S total valid solutions and Storing n strings
// where each string is n characters long

console.log(solveQueens(n));

// leetcode - 79

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
const word = "ABCCED";

const exist = function  (board: string[][], word: string): boolean {
    const m = board.length     // no.of rows
    const n = board[0]?.length ?? 0 // no.of cols

    if (m * n < word.length) return false

    const path = (index: number, row: number, col: number): boolean => {
        if (index === word.length) return true;

        const boardRow = board[row];

        if (!boardRow || row === m || row === -1 || col === n || col === -1 ||
        boardRow[col] !== word[index]) return false;

        const temp = boardRow[col]!;
        // Marked travelled path
        boardRow[col] = '#';

        if (path(index + 1, row, col - 1) ||  // Left
            path(index + 1, row, col + 1) ||  // Right
            path(index + 1, row - 1, col) ||  // Up
            path(index + 1, row + 1, col)) {  // Down
            return true;
        }

        boardRow[col] = temp;

        return false;
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            // Start the DFS with index 0 at the current row and column
            if (path(0, r, c)) return true;
        }
    }
    return false;
}
// L - length of word
// Nested loop - O(m * n)
// While travelling the matrix we have three choices at most. not counting the
// already travelled path leading to O(3^L)
// Time complexity - O(min(m * n * 3^L)), 
//
// Recursion stack - O(L)
// Space complexity - O(L)
// Output space - O(1)

console.log(exist(board, word));

// gfg (https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1)

const maze = [[1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1]];

const ratInMaze = function  (maze: number[][]): string[] {
    const result: string[] = [];
    const rows = maze.length;
    const cols = maze[0]?.length ?? 0;

    if (maze[0]?.[0] === 0 || maze[rows - 1]?.[cols - 1] === 0) return result;

    // marking already travelled cell as 2
    const path = (str: string[], row: number, col: number): void => {
        // If not a valid index, return
        if (row < 0 || row >= rows || col < 0 || col >= cols) return;
        // If adjacent cell is blocked or already travelled, return and making 
        // sure maze[row] is a valid row not undefined
        if (!maze[row] ||maze[row][col] === 0 || maze[row][col] === 2) return;

        // Base case: reached destination matrix (rows - 1, cols -1)
        if (row === rows -1 && col === cols -1) {
            result.push(str.join(""));
            return;
        }

        // Marking current cell as travelled
        maze[row][col] = 2;

        // Down 
        str.push("D");
        path(str, row +1, col);
        str.pop();

        // Left 
        str.push("L");
        path(str, row, col -1);
        str.pop();

        // Right 
        str.push("R")
        path(str, row, col +1);
        str.pop()

        // Up 
        str.push("U");
        path(str, row -1, col);
        str.pop();

        // Marking the cell as untravelled as we are backtracking
        maze[row][col] = 1;
    }   

    path([], 0, 0);
    return result;
}
// string operation - O(n ^ 2), n ^ 2 is worst case length of the path (snake path)
// Backtracking algorithm - O(4^(n*n)), At every cell we are trying 4 directions
// or O(3^(n*n)) tight bound
// Time complexity - O(4^(n*n))
//
// 
// Path array - O(n ^ 2)  // Stores up to n^2 characters
// Recursion stack - O(n ^ 2)  // traverse all the cells
// Space compelxity/Auxiliary space - O(n ^ 2)
// Output storage - O(P * n ^ 2), p is the total no.of unique paths

console.log(ratInMaze(maze));

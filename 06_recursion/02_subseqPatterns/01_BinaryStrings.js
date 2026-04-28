// gfg (https://www.geeksforgeeks.org/problems/generate-all-binary-strings/1)
// gfg (https://www.geeksforgeeks.org/dsa/generate-binary-strings-without-consecutive-1s/)

// Generate all binary strings
const generateBinStrs = function  (n, str, res) {
    // Base case: If string reaches n, store valid combination and stop
    if (str.length === n) {
        res.push(str);
        return;
    }
    
    // Generate other binary strings of length n 

    // Try adding "0" and move to the next position
    generateBinStrs(n, str+"0", res);
    // Try adding "1" and move to the next position
    generateBinStrs(n, str+"1", res);
}

// Generate all binary strings without consecutive 1's
const generateBinStrs1 = function  (n, str, res) {
    // Base case: If string reaches n, store valid combination and stop
    if (str.length === n) {
        res.push(str);
        return;
    }
    
    // Append "0" as it never creates consecutive 1s
    generateBinStrs1(n, str+"0", res);

    // Append "1" only if the string is empty or the previous character was "0"
    // to prevent consecutive 1s
    if (str.length === 0 || str[str.length - 1] === "0") {
        generateBinStrs1(n, str+"1", res);
    }
}

const binStr = function  (n) {
    let str = "";
    let res1 = [];
    let res2 = [];

    generateBinStrs(n, str, res1);
    generateBinStrs1(n, str, res2);

    return [res1, res2];
}
// Time complexity - O(n^2), since each position has 2 choices
// Space complexity - O(n), Due to recursion stack

console.log(binStr(3));

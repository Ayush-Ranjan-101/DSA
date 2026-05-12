// leetcode - 22

const n = 3;

const generateParenthesis = function  (n) {
    const result = [];

    const backtrack = function  (str, open, close) {
        // If str reaches n*2 i.e. total no.of "(" and ")" 
        // Store valid combination and stop
        if (str.length === n * 2) {
            result.push(str);
            return;
        }

        // append "(" only if its less than n since n pairs will have n "(" brackets
        if (open < n) backtrack(str + "(", open + 1, close);
        // append ")" only if its less than open since,
        // ")" can only be used to close an existing "(". Any ")" more than "("
        // will leave a unclosed extra ")" in the combination
        if (close < open) backtrack(str + ")", open, close + 1);
    }

    backtrack("", 0, 0);
    return result;
}
// Time Complexity: O(Cn * n)
// Cn is the nth Catalan Number, representing the number of valid sequences.
// We multiply by n because of string concatenation/copying in each path.
// (Asymptotically, this is roughly O(4^n / sqrt(n)))

// Space Complexity: O(n) 
// This is the Auxiliary Space (max depth of the recursion stack is 2n).

// Output Space: O(Cn * n)
// This is the memory required to store the final list of valid strings.

console.log(generateParenthesis(n));

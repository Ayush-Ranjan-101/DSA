// leetcode - 1021

const s = "(()())(())(()(()))";

const removeOuterParentheses = function  (s) {
    let depth = 0, result = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            // By this logic the outermost '(' will have depth of zero
            // so it won't be included
            if (depth > 0) result += s[i]
            depth++;
        } else {
            // By thid logic the outermost ')' will have depth of zero
            // so it won't be included
            depth--;
            if (depth > 0) result += s[i]
        }
    }
    return result;
}
// Time complexity - O(n)
// Space complexity - O(1)

console.log(removeOuterParentheses(s));

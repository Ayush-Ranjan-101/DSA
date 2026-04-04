// leetcode - 1614

const s = "(1+(2*3)+((8)/4))+1"; 

const maxDepth = function  (s) {
    let currDepth = 0, maxDepth = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            currDepth++;
        } else if (s[i] === ")") {
            maxDepth = Math.max(currDepth, maxDepth);
            currDepth--;
        }
    }

    return maxDepth;
}
// Time complexity - O(n), n - s.length
// Space complexity - O(1), constant space

console.log(maxDepth(s));

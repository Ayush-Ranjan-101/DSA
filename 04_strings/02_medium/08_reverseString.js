// leetcode - 151
const s = "  hello   to  the world  "

const reverseWords = function  (s) {
    let result = "", word = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " ") {
            // collect letters
            word += s[i];
        } else if (word.length > 0) { // word.length handles multiple spaces
            // Include space only if its not the first letter
            result = word + (result.length > 0 ? " " : "") + result;
            word = ""
        }
    }
    if (word.length > 0) {  // If the last word had no space after it
        result = word + (result.length > 0 ? " " : "") + result;
    }
    return result;
}
// Time complexity - O(n)
// Space complexity - O(1)

console.log(reverseWords(s));

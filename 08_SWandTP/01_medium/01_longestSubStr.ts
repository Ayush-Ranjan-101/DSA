// leetcode - 3

const s = "abcabcbb";

const lengthofLongestSubstring = function  (s: string): number {
    if (s.length === 1 || s.length === 0) return s.length;

    const charTable =  new Set();
    let fpointer = 0;  // left side of window
    let maxLength = 0;

     // lpointer - right side of the window
    for (let lpointer = 0; lpointer < s.length; lpointer++) {
        // If we hit a duplicate, shrink the window from the left
        // until the duplicate character has been removed
        while (charTable.has(s[lpointer])) {
            charTable.delete(s[fpointer]);
            fpointer++;
        }

        // Add current char for duplicate check later on
        charTable.add(s[lpointer]);

        // Calculating the window size
        maxLength = Math.max(maxLength, (lpointer - fpointer) + 1);
    }

    return maxLength;
}
// n - lenght of s
// for loop - O(n) - traversing s string
// while loop - O(n) - while loop is triggered when a duplicate is found
// at most it runs till lpointer doing O(n) (.delete) operations
// Time complexity - O(n) + O(n) => O(2n) => O(n)
//
// Space complexity - O(1), constant space. At any given input, it can store
// at max 256(uppercase, lowercase, digits, symbols and spaces) unique characters

console.log(lengthofLongestSubstring(s));

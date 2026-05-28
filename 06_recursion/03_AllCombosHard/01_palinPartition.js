// leetcode - 131

const s = "aab";

const partition = function  (s) {
    const result = [];

    const isPalindrome = function  (l, r) {
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }
        return true;
    };

    const generate = (strArr, startIdx) => {
        // If startIdx reaches end of the string, we found a valid partition
        if (startIdx === s.length) {
            // Storing deep copy to avoid backtracking mutation
            result.push([...strArr]);
            return;
        }

        for (let i = startIdx; i < s.length; i++) {
            // If current substring is not a palindrome, a partition of string with 
            // both sides as palindrome can not be formed. So only call if palindrome
            if (isPalindrome(startIdx, i)) {
                // Store the valid palindrome substring
                strArr.push(s.substring(startIdx, i + 1));

                // Move the right pointer past our current palindrome choice
                generate(strArr, i + 1);

                // Backtrack
                strArr.pop();
            }
        }
    };

    generate([], 0);
    return result;
}
// Palindrome check - O(n)
// Deep copy of partition - O(n)
// Partition spots - N, with 2 bianry choice, place a partition cut or do not
// place a cut leading to overall process with - O(2^n)
// Time complexity - O(n * 2^n)
//
// Recursion stack - O(n)
// Storing substring - O(n)
// Auxiliary space - O(n)
// Space complexity - O(n)
// Output space - O(n * 2^n) , "aaaa"

console.log(partition(s));

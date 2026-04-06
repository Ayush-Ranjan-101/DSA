// leetcode - 5

const s = "babad";

// check if substring palindrome or not, using two pointer
const isPalindrome = function  (s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

const longestPlindrome = function  (s) {
    if (s.length === 1) return s;

    const n = s.length;
    // any character of s is palindrome in itself, so we took 0th char
    let maxLength = 0, si = 0;

    for (let i = 0; i < n; i++) {
        // if complete length of the comming substring >= maxString we break;
        if (n - i <= maxLength) break;

        // n-1 to i, first palindrome found will be the largest of that substring
        for (let j = n - 1; j >= i; j--) {
            // if first palindrome is not greater than maxStr than no subStr can
            // be greater than max since we are going n-1 to i
            if (isPalindrome(s, i, j)) {
                let currentLen = j - i + 1;
                if (currentLen > maxLength) {
                    si = i;
                    maxLength = currentLen;
                }
                break;
            }
        }
    }

    return s.substring(si, maxLength);
}
// Time complexity - O(n^3)
// Space complexity - O(1)

const longestPlindrome1 = function  (s) {
    const n = s.length;
    // Initialize a 2D array of size n x n filled with false
    const t = Array.from({ length: n }, () => Array(n).fill(false));

    let maxL = 1;
    let start = 0;

    // Base case: single characters are always palindromes
    for (let i = 0; i < n; i++) {
        t[i][i] = true;
    }

    // Check substrings of length L
    for (let L = 2; L <= n; L++) {
        for (let i = 0; i < n - L + 1; i++) {
            const j = i + L - 1;

            // for L === 2, i = 0+1 = 1 and j = 1-1 = 0, that is by default false
            if(s[i] === s[j] && (L === 2 || t[i+1][j-1])) {
                t[i][j] = true;
                if(L > maxL) {
                    maxL = L;
                    start = i;
                }
            }
        }
    }

    return s.substring(start, start + maxL);
}
// Time complexity - O(n^2), n - s.length
// Space complexity - O(n^2), n * n matrix storing , if a substring is palindrome or not

console.log(longestPlindrome(s));
console.log(longestPlindrome1(s));

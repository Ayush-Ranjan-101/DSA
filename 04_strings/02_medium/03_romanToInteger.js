// leetcode - 13

const s = "LVIII"

const romanToInt = function  (s) {
    // a simple object here would also work
    const romanMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    let i = 0, sum = 0;
    // loop (0 - (n-1)), since we will compare ith charcter with (i+1)th char
    while (i < s.length - 1) {
        let curr = romanMap.get(s[i]);
        
        // if value of current char is >= next char, simply add
        if (curr >= romanMap.get(s[i+1])) sum += curr;
        else sum -= curr; // if next is greater,it will simply be the either of
        // two elements after it that can form a roman number according to map
        // "IL" = 49 ❎ "XLIX" = 49 ✅

        i++;
    }
    // last element will always be added
    sum += romanMap.get(s[i]);

    return sum;
}
// Time complexity - O(n), n - s.length
// Space complexity - O(1), fixed size map for roman numbers

console.log(romanToInt(s));

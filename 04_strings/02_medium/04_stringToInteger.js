// leetcode - 8

const s = "  -042";

const myAtoi = function  (s) {
    let sign = 1, res = 0;
    // upper and lower range of the answer
    const INT_MAX = Math.pow(2, 31) -1, INT_MIN = -Math.pow(2, 31);

    let i = 0;
    // removing empty space in the beginning
    while(i < s.length && s[i] === " ") {
        i++;
    }

    // not always but there might be sign mentioned
    if (i < s.length && (s[i] === "-") || s[i] === "+") {
        sign = s[i] === "-" ? -1 : 1;
        i++;
    }

    // adding numbers using mathematical operation until we get a word
    while (i < s.length && s[i] >= "0" && s[i] <= "9") {
        // for "0 to 9" - "0" gives the number itself
        res = res * 10 + (s[i] - "0");

        if (res * sign >= INT_MAX) return INT_MAX; // if exceeds upper limit
        if (res * sign <= INT_MIN) return INT_MIN; // if goes below lower limit

        i++;
    }

    return res * sign;
}
// Time complexity - O(n), n - s.length
// Space complexity - O(n), all characters of s are 0 to 9 

console.log(myAtoi(s));

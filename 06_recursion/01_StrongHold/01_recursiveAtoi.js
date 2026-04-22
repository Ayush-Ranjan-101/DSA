// leetcode - 8 (recursive implementation)

const INT_MAX = Math.pow(2, 31) -1, INT_MIN = -Math.pow(2, 31);

const helper = function  (s, i, result, sign) {
    if (i === s.length || s[i] < "0" || s[i] > "9") return sign * result;

    result = result * 10 + (s[i] - '0');

    if (result * sign >= INT_MAX) return INT_MAX;
    if (result * sign <= INT_MIN) return INT_MIN;

    return helper(s, i+1, result, sign);
}

const myAtoi = function  (s) {
    let i = 0;
    while (i < s.length && s[i] === " ") {
        i++;
    }

    let sign = 1;
    if (i < s.length && (s[i] === "-" || s[i] === "+")) {
        sign = s[i] === "-" ? -1 : 1;
        i++;
    }

    return helper(s, i, 0, sign);
}
// Time complexity - O(n), n - length of string, iterating over the entire list
// Space complexity - O(1), constant space or O(n) - Due to recursion stack

let s = "  -00043";
console.log(myAtoi(s));

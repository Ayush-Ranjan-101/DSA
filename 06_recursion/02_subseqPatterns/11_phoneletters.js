// leetcode - 17

const digits = "23"

const letterCombinations = function  (digits) {
    const result = [];

    // Edge case : If input string is empty
    if (digits.length === 0) return result;


    // Fixed phone lookup table mapping digits to their corresponding letter
    const phone = [
        [], [], 
        ["a", "b", "c"],        // 2
        ["d", "e", "f"],        // 3
        ["g", "h", "i"],        // 4
        ["j", "k", "l"],        // 5
        ["m", "n", "o"],        // 6
        ["p", "q", "r", "s"],   // 7
        ["t", "u", "v"],        // 8
        ["w", "x", "y", "z"]    // 9
    ]

    const generator = (str, index) => {
        // Base case : index out of bound for digits meaning we have
        // completed one valid combination
        if (index >= digits.length) {
            // Push the completed string
            result.push(str);
            // Backtrack to the previous state
            return;
        }

        // character digit into to a number to use it as a index for the 'phone'
        const num = Number(digits[index]);

        // loop through all letters mapped to the current digit
        for (let i = 0; i < phone[num].length; i++) {
            // Append current letter to our ongoing string and 
            // Move to the next digit passing the updated string
            generator(str + phone[num][i], index + 1);
        }
    }

    generator("", 0);
    return result;
}
// generating combinations : O(4^n), digits.length at max can be 4
// string operation : O(n), at each recursion stack adding to the string 
// Time complexity : O(4^n * n)
//
// Recursion stack : O(n), bounded by the no.of digits
// Space complexity : O(n)
// Auxiliary space : O(n)
// Output space : O(4^n * n)

console.log(letterCombinations(digits));

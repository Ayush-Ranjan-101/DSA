// gfg (https://www.geeksforgeeks.org/problems/power-set4302/1)

const s = "abc";

const allPossibleString = function  (s) {
    let result = [];

    const subsequences = function  (str, index) {
        // Base case : index out of bound
        if (index >= s.length) {
            if (str.length > 0) result.push(str);
            return;
        }

        // Including the current string
        subsequences(str + s[index], index+1);
        // Exluding the currnent string
        subsequences(str, index+1);
    }

    subsequences("", 0);
    return result.sort();
}
// Time complexity : O(2^n * n), O(2n) - each stack has 2 possibilities choices 
// O(n) - string manipulation
// O(k log k) - sorting time complexity is ignored as O(2n * n) is greater
//
// Space complexity : O(n), max depth of the recursion stack, 
// O(2n) sequnces => O(n), the number of active frames in memory never exceeds n
// Result space : O(2^n * n), Storing 2^n - 1(non-empty subsequences) 
// strings of varying lengths

console.log(allPossibleString(s));

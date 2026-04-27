// leetcode - 1922

/**
 * Calculates the number of "good" digit strings of length n.
 * A digit string is good if digits at even indices are even (0, 2, 4, 6, 8 -> 5 choices)
 * and digits at odd indices are prime (2, 3, 5, 7 -> 4 choices).
 */
const countGoodNumbers = function (n) {
    // The result needs to be modulo 10^9 + 7 as per large number requirements
    const MOD = 1000000007n;
    
    // Convert n to BigInt to handle precision for very large input values
    const bigN = BigInt(n);

    /** * Mathematical breakdown:
     * For length n, even indices (0, 2, 4...) are ceil(n/2)
     * For length n, odd indices (1, 3, 5...) are floor(n/2)
     */
    const evenPos = (bigN + 1n) / 2n; // Number of even-indexed positions (5 choices each)
    const oddPos = bigN / 2n;         // Number of odd-indexed positions (4 choices each)

    /**
     * Binary Exponentiation (Modular Exponentiation)
     * Calculates (base^power) % MOD in O(log power) time.
     */
    const myPow = function (base, power) {
        // Base case: any number to the power of 0 is 1
        if (power === 0n) return 1n;

        // Square the base and apply modulo to keep numbers manageable
        let squaredBase = (base * base) % MOD;

        if (power % 2n === 0n) {
            // If power is even: x^n = (x^2)^(n/2)
            return myPow(squaredBase, power / 2n);
        } else {
            // If power is odd: x^n = x * (x^2)^((n-1)/2)
            return (base * myPow(squaredBase, (power - 1n) / 2n)) % MOD;
        }
    }

    // Calculate total combinations for even positions (5^evenPos)
    let evenCombinations = myPow(5n, evenPos);
    
    // Calculate total combinations for odd positions (4^oddPos)
    let oddCombinations = myPow(4n, oddPos);

    // Multiply results and apply final modulo
    // Convert back to Number type for the final return
    let res = Number((evenCombinations * oddCombinations) % MOD);
    
    return res;
}
// Time complexity - O(log n), at each myPow calls itself, power reduces by half
// Space complexity - O(log n), Due to recursion space in linked with TC

// Iterative apporach
const countGoodNumbers1 = function(n) {
    const MOD = 1000000007n;
    let bigN = BigInt(n);
    
    // Binary Exponentiation (Iterative)
    const fastPow = (base, exp) => {
        let res = 1n;
        base %= MOD;
        while (exp > 0n) {
            if (exp % 2n === 1n) res = (res * base) % MOD;
            base = (base * base) % MOD;
            exp /= 2n;
        }
        return res;
    };

    const evenPos = (bigN + 1n) / 2n;
    const oddPos = bigN / 2n;

    return Number((fastPow(5n, evenPos) * fastPow(4n, oddPos)) % MOD);
};
// Time complexity - O(log n), at each loop exp is reduced by half
// Space complexity - O(1), constant space

console.log(countGoodNumbers(4));
console.log(countGoodNumbers1(4));

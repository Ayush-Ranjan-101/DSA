// leetcode - 50

const myPow = function  (x, n) {
    // Base case: Anything raised to 0 is 1
    if (n === 0) return 1;

    // Resolving negative power 
    if (n < 0) {
        x = 1/x;
        n = -n;  // JS handles this up to 2^53
    }

    // Binary exponentiation
    if (n % 2 === 0) {
        // for even powers
        return myPow(x*x, n/2);
    } else {
        // for odd powers
        return x * myPow(x*x, (n-1)/2);
    }
}
// Time complexity - O(log(n)), n - power of x, reducing n by half in 
// every recursion stack
// Space complexity - O(1), constant space or O(log(n)), due to recursion stack 

console.log(myPow(2, 5));

// Certain languages like Java/C++ where int ranges from -2^31 to 2^31 - 1,
// therefore in this case we have to create a new function and pass n as long
// but numbers in java have a range of 2^53, so we don't have to worry about that

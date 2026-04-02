// leetcode - 796

const s = "abcde", goal = "cdead";

const rotateString = function  (s, goal) {
    if (s.length !== goal.length) return false;
    if (s.length === 0) return true    

    const n = s.length;
    
    // Try every possible shift (starting position i) as letters could repeat
    // (e.g., s = "aaaaab", goal = "aaaaba"),
    for (let i = 0; i < n; i++) {
        let isMatch = true;

        // Check if s shifted by i matches t
        for (let j = 0; j < n; j++) {
            // (i + j) % n handles the "rotation" wrap-around
            if (s[(i + j) % n] !== t[j]) {
                isMatch = false;
                break;
            }
        }

        // If we made it through the inner loop without a mismatch
        if (isMatch) return true;
    }

    return false;
}

console.log(rotateString(s, goal));

// s+s.includes(goal) also works giving time complexity - O(n)

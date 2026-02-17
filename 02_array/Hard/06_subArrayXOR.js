// geeks for geeks (https://www.geeksforgeeks.org/problems/count-subarray-with-given-xor/1) 

const nums = [4, 2, 2, 6, 4];

const subarrayXor = function  (nums, k) {
    const prefixXorFreq = new Map();
    let count = 0, currXorVal = 0;

    // Prefix XOR of 0 occured before we started 
    prefixXorFreq.set(0, 1)
    for (let i = 0; i < nums.length; i++) {
        currXorVal ^= nums[i];

        // prefixXor[prev] ^ prefixXor[current] = k, so
        const target = currXorVal ^ k;
        if (prefixXorFreq.has(target)) {
            count += prefixXorFreq.get(target)
        }

        // update the frequency
        const currFreq = (prefixXorFreq.get(currXorVal) || 0) + 1;
        prefixXorFreq.set(currXorVal, currFreq);
    }

    return count;
}

console.log(subarrayXor(nums, 6));

// Time complexity : O(n)
// Space complexity : O(n)

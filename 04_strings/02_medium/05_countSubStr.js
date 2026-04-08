// gfg (https://www.geeksforgeeks.org/problems/count-substring/1)

const s = "bbaccc";

const countSubstring = function  (s) {
    // tracks most recent index
    const map = new Map([
        ['a', -1],
        ['b', -1],
        ['c', -1]
    ]);
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        // set the new fount index
        map.set(s[i], i);

        const aCount = map.get('a'), bCount = map.get('b'), cCount = map.get('c');
        // first substring containing a,b,c found
        if (aCount !== -1 && bCount !== -1 && cCount !== -1) {
            // min = count of number of characters before it, that if added will also
            // result in a substring with a,b,c
            const min = Math.min(aCount, bCount, cCount);
            // + 1 for the current a,b,c set in the substring
            count += min + 1;
        }
    }

    return count;
}
// Time complexity - O(n), n - s.length
// Space complexity - O(1), contant space

console.log(countSubstring(s));

// leetcode - 1781

const s = "aabcb";

const beautySum = function  (s) {
    const n = s.length
    let totalBeauty = 0;

    for (let i = 0; i < n; i++) {
        // store the frequnecy of all lowercase alphabets
        // 0th index = 'a' frequnecy, 1th index = 'b' frequnecy
        const freq = new Array(26).fill(0);

        for (let j = i; j < n; j++) {
            // getting the index of character and updating frequnecy
            const idx = s.charCodeAt(j) - 97;
            freq[idx]++;

            let maxFreq = 0, minFreq = n, sum = 0;
            
            for (let k = 0; k < 26; k++) {
                // avoiding zeros to get right minFreq value
                if(freq[k] > 0) {
                    if (freq[k] > maxFreq) maxFreq = freq[k];
                    if (freq[k] < minFreq) minFreq = freq[k];
                }
            }
            // maxFrq will always be >= minFreq
            totalBeauty += maxFreq - minFreq;
        }
    }

    return totalBeauty;
}
// Time complexity - O(n^2 * 26), n - s.length and 26 - frequnecy Array
// Space complexity - O(1)

console.log(beautySum(s));

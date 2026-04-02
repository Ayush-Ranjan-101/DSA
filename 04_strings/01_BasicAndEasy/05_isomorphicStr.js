// 205

const s = "badc", t = "baba"

const isIsomorphic = function  (s, t) {
    const sMap = new Map, tMap = new Map();

    // We track the mapping of both the strings
    for (let i = 0; i < s.length; i++) {
        // Keeping the first formed pair. If character repeats and forms a pair
        // with a new character, return false.
        if (!sMap.has(s[i])) sMap.set(s[i], t[i]);
        else if (sMap.get(s[i]) !== t[i]) return false;

        // Keeping the first formed pair. If character repeats and forms a pair
        // with a new character, return false.
        if (!tMap.has(t[i])) tMap.set(t[i], s[i]);
        else if (tMap.get(t[i]) !== s[i]) return false;
    }

    // no extra pairs found
    return true;
}
// Time complexity - O(n)
// Space complexity - O(s+t)

const isIsomorphic1 = function  (s, t) {
    // -1 as never seen value
    const n1 = Array(256).fill(-1), n2 = Array(256).fill(-1);

    for (let i = 0; i < s.length; i++) {
        // last recorded position does not match meaning mapping is broken
        if (n1[s.charCodeAt(i)] !== n2[t.charCodeAt(i)]) return false;

        // Update the last seen position
        n1[s.charCodeAt(i)] = i;
        n2[t.charCodeAt(i)] = i;
    }

    return true;
}
// Time complexity - O(n)
// Space complexity - O(1), constant space

console.log(isIsomorphic(s, t));
console.log(isIsomorphic1(s, t));

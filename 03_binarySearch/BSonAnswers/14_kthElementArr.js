// gfg (https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1)

// const a = [2, 3, 6, 7, 9], b= [1, 4, 8, 10], k = 5
const a = [1, 4, 8, 10, 12], b = [5, 7, 11, 15, 17], k = 6

const kthElement = function  (a, b, k) {
    const n1 = a.length, n2 = b.length;
    
    if (n2 < n1) return kthElement(b, a, k);

    let low = Math.max(0, k - n2), high = Math.min(k, n1);

    while (low <= high) {
        const mid1 = low + Math.floor((high - low) / 2);
        const mid2 = k - mid1;

        const left1 = mid1 === 0 ? -Number.MAX_VALUE : a[mid1 - 1];
        const left2 = mid2 === 0 ? -Number.MAX_VALUE : b[mid2 - 1];
        
        const right1 = mid1 === n1 ? Number.MAX_VALUE : a[mid1];
        const right2 = mid2 === n2 ? Number.MAX_VALUE : b[mid2];

        if (left1 <= right2 && left2 <= right1) {
            return Math.max(left1, left2);
        } else if (left1 > right2) {
            high = mid1 - 1;
        } else {
            low = mid1 + 1;
        }
    }
    return -1;
}
// Time complexity - O(log(min(n1, n2)))
// Space complexity - O(1)

console.log(kthElement(a, b, k));

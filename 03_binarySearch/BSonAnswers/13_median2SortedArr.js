// leetcode - 4

const nums1 = [7, 12, 14, 15], nums2 = [1, 2, 3, 4, 9, 11];

const findMedianSortedArrays = function (nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;

    // Ensure nums1 is the smaller array to keep binary search complexity O(log(min(n1, n2)))
    if(n2 < n1) return findMedianSortedArrays(nums2, nums1);

    let low = 0, high = n1;
    let n3 = n1 + n2 + 1
    while (low <= high) {
        const cut1 = low + Math.floor((high - low) / 2);
        const cut2 = Math.floor(n3/2) - cut1;

        // If cut is at 0, there is nothing on the left side. Use -Infinity.
        // If cut is at length, there is nothing on the right side. Use Infinity.
        const left1 = cut1 === 0 ? -Number.MAX_VALUE : nums1[cut1 - 1];
        const left2 = cut2 === 0 ? -Number.MAX_VALUE : nums2[cut2 - 1];

        const right1 = cut1 === n1 ? Number.MAX_VALUE : nums1[cut1];
        const right2 = cut2 === n2 ? Number.MAX_VALUE : nums2[cut2];

        if (left1 <= right2 && left2 <= right1) {
            // Found the correct partition
            if (n3 % 2 === 0) {
                return Math.max(left1, left2)
            } else {
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
            }
        } else if (left1 > right2) {
            // We are too far right in num1, move left
            high = cut1 - 1;
        } else {
            // We are too far left in num1, move right
            low = cut1 + 1;
        }
    }

    return 0.0;
}
// Time complexity - O(log(min(n1, n2)))
// Space complexity - O(1)

console.log(findMedianSortedArrays(nums1, nums2));

// leetcode - 540

const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];

// The similar elements maintain the chain of odd even pairs
const singleNonDuplicate1 = function  (nums) {
    let start = 0, end = nums.length - 1;

    while (start < end) {
        let mid = start + Math.floor((end - start) / 2);

        if (mid % 2 === 1) {
            mid--;  // mid should always be the start of the pair
        }

        if (nums[mid] === nums[mid + 1]) {
            // The elements till mid + 1 maintain the odd even pair
            // so single element must be on the right side
            start = mid + 2;
        } else {
            // The chain of odd even pair is broken so the middle element
            // or the elements before it must be a single element
            end = mid
        }
    }

    return nums[start];
}
// Time complexity - O(log n)
// Space complexity - O(1)

const singleNonDuplicate = function  (nums) {
    let start = 0, end = nums.length - 1;
    
    // The side which has the single element will have an odd number of elements
    // from either of the two elements in the pair
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        let idx = -1;
        if (nums[mid + 1] === nums[mid]) {
            idx = mid + 1;
            if (mid % 2 === 0) { // Check if left side has even number of elements
                start = mid + 1;
            } else {  // If not then the single element must be on right and vice versa
                end = mid - 1;
            }
        } else if (nums[mid - 1] === nums[mid]) {
            idx = mid - 1;
            if (idx % 2 === 0) {  // Check if left side has even number of elements
                start = mid + 1;
            } else { // If not then the single element must be on right and vice versa
                end = mid - 1;
            }
        } else {
            return nums[mid];
        }

    }
}

// Time complexity = O(log n)
// Space complexity = O(1)

console.log(singleNonDuplicate(nums));
console.log(singleNonDuplicate1(nums));

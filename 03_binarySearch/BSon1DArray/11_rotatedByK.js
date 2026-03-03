// gfg (https://www.geeksforgeeks.org/problems/rotation4723/1)

const nums = [5, 1, 2, 3, 4];

const findRotation = function  (nums) {
    let start = 0, end = nums.length - 1;

    // not doing <= so both land on the minimum, reducing the effort to track
    // on which one among the two holds the minimum
    while(start < end) {
        let mid = start + Math.floor((end - start) / 2);

        if (nums[mid] > nums[end]) {
            // Minimum lies in the right half
            start = mid + 1;
        } else {
            // Minimum lies in the left half
            // mid can be the minimum so not doing end = mid + 1
            end = mid
        }
    }

    return start;
}

console.log(findRotation(nums));

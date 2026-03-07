// leetcode - 162

const nums = [1,2,1,3,5,6,4]

const findPeakElement = function  (nums) {
    let start = 0, end = nums.length - 1;

    while (start < end) {
        let mid = start + Math.floor((end - start) / 2);

        if (nums[mid + 1] > nums[mid]) {
            // follow the larger element as they have a high chance
            // of being a peak
            start = mid + 1;
        } else {
            // with next element is smaller, this could be the 
            // potential peak
            end = mid
        }
    }

    return start;
}

console.log(findPeakElement(nums));

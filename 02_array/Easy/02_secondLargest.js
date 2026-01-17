// Second largest and second smallest elememt without sorting

const nums = [1, 2, 4, 7, 7, 5];
const nums2 = [1];

const res = secondLargestSmallest(nums);
console.log(`Second largest element is ${res[0]}`);
console.log(`Second smallest elememt is ${res[1]}`);

function secondLargestSmallest(nums) {
    if(nums.length === 1) {
        // A single element array cannot have second largest or smallest
        return [-1, -1];
    }

    // -1 helps assign the ist idx element even if it is less than nums[maxIdx] 
    let maxIdx = 0, secondMaxIdx = -1;
    // -1 helps assign the 1st idx element even if it is greater than nums[minIdx]
    let minIdx = 0, secondMinIdx = -1;

    for (let i = 1; i < nums.length; i++) {

        // Finding the second largest
        if(nums[i] > nums[maxIdx]) {
            secondMaxIdx = maxIdx;
            maxIdx = i;
        } else if (nums[i] < nums[maxIdx]) {  // Handling duplicates
            if (secondMaxIdx === -1 || nums[i] > nums[secondMaxIdx]) {
                secondMaxIdx = i;
            }
        }

        // Finding the second smallest
        if (nums[i] < nums[minIdx]) {
            secondMinIdx = minIdx;
            minIdx = i;
        } else if (nums[i] > nums[minIdx]) {  // Handling duplicates
            if (secondMinIdx === -1 || nums[i] < nums[secondMinIdx]) {
                secondMinIdx = i;
            }
        }
    }

    return [nums[secondMaxIdx], nums[secondMinIdx]];
}

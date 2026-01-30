// leetcode - 75

const nums = [2, 0, 2, 1, 1, 0];

const sortColors = function (nums) {
    let i = 0, j = 0, k = nums.length - 1;
    let temp = null;

    while (i <= k) {
        if (nums[i] === 0) {  // Swap 0 to the front(j)
            temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
            i++;
        } else if (nums[i] === 2) {  // Swap 2 to the end(k)
            temp = nums[i];
            nums[i] = nums[k];
            nums[k] = temp;
            k--;
            // swapped element can be 2 so, no i++
        } else {  
            // leave 1 in the middle
            i++;
        }
    }
}

// const sortColors = function (nums) {
//     let count0 = 0, count1 = 0, count2 = 0;
//
//     // frequency of each element
//     for (let i = 0; i < nums.length; i++) {
//         if( nums[i] === 0 ) count0++;
//         else if ( nums[i] === 1 ) count1++;
//         else count2++;
//     }
//
//     // Place elements according to there frequency
//     for (let i = 0; i < count0; i++) {
//         nums[i] = 0;
//     }
//
//     for (let i = 0; i < count1; i++) {
//         nums[i + count0] = 1;
//     }
//
//     for (let i = 0; i < count2; i++) {
//         nums[i + count0 + count1] = 2;
//     }
// }


sortColors(nums);
console.log(nums);

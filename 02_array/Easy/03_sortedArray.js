const nums = [1, 2, 3, 4, 5];
console.log(isSorted(nums));
console.log(2 % 5);

// Striver sheet
function isSorted(nums) {
    const n = nums.length
    for (let i = 1; i < n; i++) {
        // checks if any element is smaller than its previous element or
        // same consecutive element, return false
        if(nums[i] <= nums[i-1]) {
            return false;
        }
    }
    return true; // return true if sorted
}


// leetcode-1752 same question but with a little twist

// var check = function(nums) {
//     const n = nums.length;
//     let count = 0;
//     for(let i = 0; i < n; i++) {
//         // the 'nums[(i + 1) % n]' helps rotate through a circular array
//         if(nums[i] > nums[(i + 1) % n]) {
//             count++;
//         }
//         // Since it can be a circular array if more than one break point is found return false
//         if(count > 1) {
//             return false;
//         }
//     }
//     return true;
// };

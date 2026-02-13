// leetcode - 229

// const nums = [1, 2, 1, 1, 3, 2];
const nums = [1, 2, 1, 1, 3, 2, 2];

const majorityElement = function  (nums) {
    let count1 = 0, count2 = 0;
    let ele1 = -Infinity, ele2 = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (count1 === 0 && ele2 !== nums[i]) {
            count1++;
            ele1 = nums[i];
        } else if (count2 === 0 && ele1 !== nums[i]) {
            count2++;
            ele2 = nums[i];
        } else if (nums[i] === ele1) {
            count1++;
        } else if (nums[i] === ele2) {
            count2++;
        } else {
            count1--;
            count2--;
        }
    }

    const res = [], bar = Math.floor(nums.length/3);
    count1 = count2 = 0;

    // We recheck as the traversel above just shows the potentail majority elements
    // test case for the above statement : [1,2,3,4,5,6];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === ele1) count1++;
        else if (nums[i] === ele2) count2++;
    }

    if (count1 > bar) res.push(ele1);
    if (count2 > bar) res.push(ele2);

    return res;
}

// Better apporach
// const majorityElement = function  (nums) {
//     const freq = new Map();
//
//     const res = [], bar = Math.floor(nums.length/3) + 1;
//     for (let i = 0; i < nums.length; i++) {
//         const key = nums[i];
//         freq.set(key, (freq.get(key) || 0) + 1);
//
//         if (freq.get(key) === bar) {
//             res.push(key);
//         }
//
//         if (res.length === 2) {
//             break;
//         }
//     }
//
//     return res;
// }

// Time complexity : O(n)
// Space complexity : O(n)

console.log(majorityElement(nums));

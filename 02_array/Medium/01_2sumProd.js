// leetcode-1

const nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));

function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const find = target - nums[i];

        if(map.has(find)) return [i, map.get(find)];
        map.set(nums[i], i);
    }
}


// O(n^2) would be to loop throught the entire with two nested loops
// O(2n) would be first loop and store in map and then check in another loop

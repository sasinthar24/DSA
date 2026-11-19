/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function(nums) {
    const n = nums.length;

    if (n <= 3) return 0;

    nums.sort((a, b) => a - b);

    const case1 = nums[n - 1] - nums[2];

    const case2 = nums[n - 2] - nums[1];

    const case3 = nums[n - 3] - nums[0];

    return Math.min(case1, case2, case3);

};
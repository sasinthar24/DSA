/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSelectedElements = function(nums) {
     nums.sort((a, b) => a - b);

    const dp = new Map();

    let ans = 0;

    for (const x of nums) {

        // Read previous states BEFORE updating
        const keep = (dp.get(x - 1) || 0) + 1;

        const increase = (dp.get(x) || 0) + 1;

        // Update both possible ending values
        dp.set(x, Math.max(dp.get(x) || 0, keep));

        dp.set(x + 1, Math.max(dp.get(x + 1) || 0, increase));

        ans = Math.max(ans, keep, increase);
    }

    return ans;
};
/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {
      const n = nums.length;
    let ans = Infinity;

    const prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    for (let left = 0; left < n; left++) {

        for (let len = l; len <= r; len++) {

            let right = left + len;

            if (right > n) break;

            let sum = prefix[right] - prefix[left];

            if (sum > 0) {
                ans = Math.min(ans, sum);
            }
        }
    }

    return ans === Infinity ? -1 : ans;
};
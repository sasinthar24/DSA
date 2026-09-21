/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultArray = function(nums, k) {
     const result = new Array(k).fill(0);

    // dp[r] = number of subarrays ending at previous index
    // whose product % k == r
    let dp = new Array(k).fill(0);

    for (const num of nums) {
        const r = num % k;
        const next = new Array(k).fill(0);
        next[r]++
        for (let p = 0; p < k; p++) {
            if (dp[p] > 0) {
                const newRemainder = (p * r) % k;
                next[newRemainder] += dp[p];
            }
        }
        for (let r = 0; r < k; r++) {
            result[r] += next[r];
        }

        dp = next;
    }

    return result;
};
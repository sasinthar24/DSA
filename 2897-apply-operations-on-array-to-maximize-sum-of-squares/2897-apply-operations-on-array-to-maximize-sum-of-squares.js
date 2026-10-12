/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, k) {
    const MOD = 1000000007n;
    const bits = new Array(32).fill(0);

    for (const num of nums) {
        for (let b = 0; b < 32; b++) {
            if ((num & (1 << b)) !== 0) {
                bits[b]++;
            }
        }
    }

    let ans = 0n;

    for (let i = 0; i < k; i++) {
        let num = 0n;

        for (let b = 0; b < 32; b++) {
            if (bits[b] > 0) {
                num |= (1n << BigInt(b));
                bits[b]--;
            }
        }

        ans = (ans + num * num) % MOD;
    }

    return Number(ans);
};
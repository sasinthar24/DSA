/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function(nums) {
      const MOD = 1000000007n;
    const n = nums.length;

    // Precompute combinations using Pascal's triangle.
    const comb = Array.from(
        { length: n + 1 },
        () => Array(n + 1).fill(0n)
    );

    for (let i = 0; i <= n; i++) {
        comb[i][0] = 1n;
        comb[i][i] = 1n;

        for (let j = 1; j < i; j++) {
            comb[i][j] =
                (comb[i - 1][j - 1] + comb[i - 1][j]) % MOD;
        }
    }

    function solve(arr) {
        if (arr.length <= 2) return 1n;

        const root = arr[0];
        const left = [];
        const right = [];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < root) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        const leftWays = solve(left);
        const rightWays = solve(right);

        const interleavings =
            comb[left.length + right.length][left.length];

        return (
            interleavings * leftWays % MOD
            * rightWays % MOD
        ) % MOD;
    }

    // Subtract 1 because the original ordering is excluded.
    return Number((solve(nums) - 1n + MOD) % MOD);
};
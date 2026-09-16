/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfSets = function(n, k) {
   const MOD = 1000000007;

    const dp = Array.from(
        { length: n },
        () => new Array(k + 1).fill(0)
    );

    // 0 segments
    for (let i = 0; i < n; i++) {
        dp[i][0] = 1;
    }

    for (let segments = 1; segments <= k; segments++) {

        let prefix = 0;

        for (let i = 1; i < n; i++) {

          
            prefix = (prefix + dp[i - 1][segments - 1]) % MOD;

            dp[i][segments] =
                (dp[i - 1][segments] + prefix) % MOD;
        }
    }

    return dp[n - 1][k];
};
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumChanges = function(s, k) {
    const n = s.length;

    // STEP 1: Precompute minimum changes for every substring

    const cost = Array.from(
        { length: n },
        () => Array(n).fill(Infinity)
    );

    for (let len = 2; len <= n; len++) {

        for (let start = 0; start + len <= n; start++) {

            let minCost = Infinity;

            // Try all proper divisors
            for (let d = 1; d < len; d++) {

                if (len % d !== 0) continue;

                let changes = 0;

                // Compare characters in each group
                for (let r = 0; r < d; r++) {

                    let left = start + r;

                    let right = start + r +
                        Math.floor((len - 1 - r) / d) * d;

                    while (left < right) {

                        if (s[left] !== s[right]) {
                            changes++;
                        }

                        left += d;
                        right -= d;
                    }
                }

                minCost = Math.min(minCost, changes);
            }

            cost[start][start + len - 1] = minCost;
        }
    }

    // STEP 2: Partition DP

    const dp = Array.from(
        { length: n + 1 },
        () => Array(k + 1).fill(Infinity)
    );

    dp[0][0] = 0;

    // parts = number of substrings
    for (let parts = 1; parts <= k; parts++) {

        // end = number of characters considered
        for (let end = parts * 2; end <= n; end++) {

            // start = partition position
            for (
                let start = (parts - 1) * 2;
                start <= end - 2;
                start++
            ) {

                dp[end][parts] = Math.min(
                    dp[end][parts],
                    dp[start][parts - 1] +
                    cost[start][end - 1]
                );
            }
        }
    }

    // Return integer answer, NOT cost matrix
    return dp[n][k];
};
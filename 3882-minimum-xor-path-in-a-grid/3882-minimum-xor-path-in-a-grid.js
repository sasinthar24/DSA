/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
   const m = grid.length;
    const n = grid[0].length;

    const dp = Array.from(
        { length: m },
        () => Array.from({ length: n }, () => new Uint8Array(1024))
    );

    dp[0][0][grid[0][0]] = 1;

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (r === 0 && c === 0) continue;

            const val = grid[r][c];
            const curr = dp[r][c];

            if (r > 0) {
                const top = dp[r - 1][c];
                for (let x = 0; x < 1024; x++) {
                    if (top[x]) {
                        curr[x ^ val] = 1;
                    }
                }
            }

            if (c > 0) {
                const left = dp[r][c - 1];
                for (let x = 0; x < 1024; x++) {
                    if (left[x]) {
                        curr[x ^ val] = 1;
                    }
                }
            }
        }
    }

    for (let x = 0; x < 1024; x++) {
        if (dp[m - 1][n - 1][x]) return x;
    }

    return -1;
};
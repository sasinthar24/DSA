/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePaths = function(grid) {
    const MOD = 1000000007;
    const m = grid.length;
    const n = grid[0].length;

    const dp = Array.from({ length: m }, () => Array(n).fill(0));
    dp[0][0] = 1;

    function move(i, j, di, dj) {
        while (true) {
            i += di;
            j += dj;

            // Outside the grid
            if (i < 0 || i >= m || j < 0 || j >= n) {
                return null;
            }

            // Empty cell: movement ends
            if (grid[i][j] === 0) {
                return [i, j];
            }

            // Mirror: reflect and continue
            if (di === 0 && dj === 1) {
                // Moving right -> turn down
                di = 1;
                dj = 0;
            } else {
                // Moving down -> turn right
                di = 0;
                dj = 1;
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dp[i][j] === 0) continue;

            // Try moving right
            const right = move(i, j, 0, 1);

            if (right !== null) {
                const [x, y] = right;
                dp[x][y] = (dp[x][y] + dp[i][j]) % MOD;
            }

            // Try moving down
            const down = move(i, j, 1, 0);

            if (down !== null) {
                const [x, y] = down;
                dp[x][y] = (dp[x][y] + dp[i][j]) % MOD;
            }
        }
    }

    return dp[m - 1][n - 1]; 
};
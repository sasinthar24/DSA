/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
      const m = grid.length;
    const n = grid[0].length;

    function dfs(r, c) {
        // Out of bounds means this island touches the boundary
        if (r < 0 || r >= m || c < 0 || c >= n) {
            return false;
        }

        // Water or already visited
        if (grid[r][c] === 1) {
            return true;
        }

        // Mark land as visited
        grid[r][c] = 1;

        const up = dfs(r - 1, c);
        const down = dfs(r + 1, c);
        const left = dfs(r, c - 1);
        const right = dfs(r, c + 1);

        return up && down && left && right;
    }

    let count = 0;

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) {
                if (dfs(r, c)) {
                    count++;
                }
            }
        }
    }

    return count;
};
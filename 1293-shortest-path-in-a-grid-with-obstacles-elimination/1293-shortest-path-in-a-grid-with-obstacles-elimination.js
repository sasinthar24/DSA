/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    let result = Infinity;

    const dx = [0, 1, -1, 0];
    const dy = [1, 0, 0, -1];

    const n = grid.length;
    const m = grid[0].length;

    let dist = Array.from(
        { length: n },
        () => Array.from(
            { length: m },
            () => new Array(k + 1).fill(Infinity)
        )
    );

    function dfs(r, c, steps, remain) {

        if (steps >= result)
            return;

        if (r === n - 1 && c === m - 1) {
            result = steps;
            return;
        }

        if (steps >= dist[r][c][remain])
            return;

        dist[r][c][remain] = steps;

        for (let i = 0; i < 4; i++) {

            let nr = r + dx[i];
            let nc = c + dy[i];

            if (nr < 0 || nr >= n || nc < 0 || nc >= m)
                continue;

            if (grid[nr][nc] === 0) {
                dfs(nr, nc, steps + 1, remain);
            }
            else if (grid[nr][nc] === 1 && remain > 0) {
                dfs(nr, nc, steps + 1, remain - 1);
            }
        }
    }

    dfs(0, 0, 0, k);

    return result === Infinity ? -1 : result;
};
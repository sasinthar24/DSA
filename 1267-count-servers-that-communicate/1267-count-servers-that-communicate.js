/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const row = new Array(n).fill(0);
    const col = new Array(m).fill(0);

    for(let r = 0; r < n; r++)
    {
        for(let c = 0; c < m; c++)
        {
            if(grid[r][c] == 1)
            {
                row[r]++;
                col[c]++;
            }
        }
    }
    let ans = 0;
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < m; j++)
        {
            if(grid[i][j] == 1 && (row[i] > 1 || col[j] > 1))
            ans++;
        }
    }
    return ans;
};
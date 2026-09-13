/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const dp = Array.from({length:n},()=> Array.from({length:n},()=> new Array(n).fill(null)));
    function dfs(r1,c1,r2)
    {
        const c2 = r1+c1 - r2;

        if(r1 >= n || c1 >= m || r2 >= n || c2 >= m || c2<0)
        return -Infinity;
        if(dp[r1][c1][r2] != null)
        return dp[r1][c1][r2]

        if(grid[r1][c1] == -1 || grid[r2][c2] == -1)
        return -Infinity;

        if(r1 == n-1 && c1 == m-1)
        return grid[r1][c1];

        let cherry = grid[r1][c1];

        if(r1 != r2 || c1 != c2)
        {
            cherry += grid[r2][c2]
        }
        let best = Math.max(dfs(r1+1,c1,r2+1),dfs(r1+1,c1,r2),dfs(r1,c1+1,r2+1),dfs(r1,c1+1,r2));

        dp[r1][c1][r2] =  cherry+best;
        return dp[r1][c1][r2]
    }
    return Math.max(0,dfs(0,0,0))
   
};
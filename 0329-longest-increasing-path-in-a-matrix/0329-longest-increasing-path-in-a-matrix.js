/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const dp = Array.from({length:n},()=> new Array(m).fill(null));
    const dx = [0,1,-1,0]
    const dy = [1,0,0,-1]
    function dfs(r,c)
    {
        if(dp[r][c] != null)
        return dp[r][c]
        let best = 1
        for(let i = 0; i < 4;i++)
        {
            let nr = r + dx[i];
            let nc = c + dy[i];
            if(nr >= 0 && nr < n && nc >=0 && nc <m && matrix[nr][nc] > matrix[r][c])
            {
                best = Math.max(best,1 + dfs(nr,nc))
            }
        }

        dp[r][c] = best;
        return dp[r][c];
    }
    let ans = 0;
    for(let r = 0; r < n; r++)
    {
        for(let c = 0; c < m; c++)
        {
            ans = Math.max(ans,dfs(r,c))
        }
    }
    return ans
};
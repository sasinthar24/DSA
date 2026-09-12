/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const dp = Array.from({length:n},()=> new Array(m).fill(-1));

    function dfs(r,c)
    {
        if(r < 0 || c < 0)
        return 0;
        if(matrix[r][c] == 0)
        return 0;

        if(dp[r][c] != -1)
        return dp[r][c];

        dp[r][c] = 1+Math.min(dfs(r-1,c),dfs(r,c-1),dfs(r-1,c-1))
        return dp[r][c]
    }
    ans = 0;
    for(let i = 0 ; i < n ;i++)
    {
        for(let j = 0; j < m;j++)
        {
           ans+=dfs(i,j)
        }
    }
    return ans;
};
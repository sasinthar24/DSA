/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const n = triangle.length;
    const dp = Array.from({length:n},()=> new Array(n).fill(null));

    function dfs(i,j)
    {

        if(i == n-1)
        {
            return triangle[i][j]
        }
        if(dp[i][j] != null)
        return dp[i][j]

        let down = triangle[i][j]+dfs(i+1,j)
        let diag = triangle[i][j] + dfs(i+1,j+1)

        dp[i][j] = Math.min(down,diag)
        return dp[i][j]
    }
    return dfs(0,0)
};
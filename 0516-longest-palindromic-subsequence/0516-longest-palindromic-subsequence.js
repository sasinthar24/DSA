/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const n = s.length;
    const dp = Array.from({length:n},()=> new Array(n).fill(-1));
    function dfs(i,j)
    {
        if(i > j)
        return 0;
        if(i == j)
        {
            dp[i][j] = 1;
            return dp[i][j]
        }
        if(dp[i][j] != -1)
        return dp[i][j];
        
        
        if(s[i] == s[j])
        {
            dp[i][j] = 2 + dfs(i+1,j-1)
            return dp[i][j]
        }
        dp[i][j] = Math.max(dfs(i+1,j),dfs(i,j-1));
        return dp[i][j]
    }
    return dfs(0,n-1)
};
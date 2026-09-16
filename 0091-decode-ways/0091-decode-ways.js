/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const n = s.length;
    const dp = new Array(n+1).fill(-1);
    function dfs(i)
    {
        if(i == n)
        return 1;
        if(s[i] == 0)
        return 0;
        if(dp[i] != -1)
        return dp[i];

        let take1 = dfs(i+1);

        let take2 = 0;
        if(i+1 < n && Number(s.substring(i,i+2)) >= 10 && Number(s.substring(i,i+2)) <= 26)
        {
            take2 = dfs(i+2);
        }
        dp[i] = take1 + take2;
        return dp[i]
    }
    return dfs(0)
};
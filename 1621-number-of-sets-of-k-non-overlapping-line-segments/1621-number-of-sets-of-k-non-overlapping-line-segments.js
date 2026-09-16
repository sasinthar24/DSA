/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfSets = function(n, k) {
    const dp = Array.from({length:n},()=> new Array(k+1).fill(0));
    const prefixArray = Array.from({length:n},()=> new Array(k+1).fill(0));
    const mod = 1000000007
    for(let i = 0;i < n ;i++)
    {
        dp[i][0] = 1;
        prefixArray[i][0]= i+1;
    }
    for(let segments = 1; segments <= k; segments++)
    {
        for(let i = 0; i < n; i++)
        {
              let notTake = i > 0 ? dp[i-1][segments]:0;
              let take = i > 0 ? prefixArray[i-1][segments-1]:0;
              dp[i][segments] =(take+notTake)% mod;
              prefixArray[i][segments] = dp[i][segments];
              if(i > 0)
              {
                prefixArray[i][segments] = (prefixArray[i-1][segments] + dp[i][segments]) % mod;
              }
        }
    }
    return dp[n-1][k]
};
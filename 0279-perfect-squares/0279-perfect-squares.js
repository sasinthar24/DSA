/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const dp = new Array(n+1).fill(-1);

  function dfs(target)
  {
    if(target == 0)
    {
        return 0
    }

    if(dp[target]!=-1)
    return dp[target];
    let ans = Infinity;
    for(let i = 1; i * i <= target;i++)
    {
        let square = i * i;
        
        ans = Math.min(ans,1+dfs(target-square));
    }
    dp[target] = ans;
    return dp[target]
  }

  return dfs(n);

};
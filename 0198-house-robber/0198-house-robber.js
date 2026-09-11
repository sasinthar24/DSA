/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let ans = -Infinity
    const n = nums.length;
    let dp = new Array(n).fill(-1)
    function dfs(i)
    {
      if(i >= n)
      {
        return 0; 
      }
      if(dp[i] != -1)
      return dp[i]
       dp[i] = Math.max(dfs(i+1),dfs(i+2)+nums[i]);
       return dp[i]
    }
   
    
    return dfs(0);
};
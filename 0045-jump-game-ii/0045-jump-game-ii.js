/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let min = Infinity;
    const n = nums.length;
    dp = new Array(n).fill(-1);
    function dfs(index)
    {
      if(index >= n-1)
      {
        return 0;
      }
      if(dp[index] != -1)
      return dp[index];
      let minJump = Infinity;
      for(let next = index+1; next <= index+nums[index] && next < n; next++)
      {
       minJump =Math.min(minJump,1+dfs(next));
      }
     dp[index] = minJump;
     return dp[index]
    }
    return dfs(0)
   
};
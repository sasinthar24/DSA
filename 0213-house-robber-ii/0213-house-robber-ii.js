/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    const dp1 = new Array(n).fill(-1);
    const dp2 = new Array(n).fill(-1);
    console.log(dp1)
    if(n == 1)
    return nums[0];

    function dfs(i,end,dp)
    {
        if(i > end)
        return 0;
        if(dp[i] != -1)
        return dp[i]

        dp[i] =  Math.max(dfs(i+1,end,dp),nums[i]+dfs(i+2,end,dp))
        return dp[i]
    }
    return Math.max(dfs(0,n-2,dp1),dfs(1,n-1,dp2))
};
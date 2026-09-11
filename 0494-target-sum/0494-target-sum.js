/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const n = nums.length;
    const dp = Array.from({length:n},()=> new Map());
    function dfs(index,sum)
    {
        if(index === n)
        {
            return target === sum ? 1 : 0
        }

        if(dp[index].has(sum))
        return dp[index].get(sum);
        let add = dfs(index+1,sum+nums[index]);
        let sub = dfs(index+1,sum-nums[index]);
        dp[index].set(sum,add+sub)
        return add+sub
    }
    return dfs(0,0)
};
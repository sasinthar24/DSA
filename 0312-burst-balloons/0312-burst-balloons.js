/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
     nums = [1,...nums,1]
    const dp = Array.from({length:nums.length},()=> new Array(nums.length).fill(null))
    function dfs(left,right)
    {
        if(left+1 === right)
        return 0;
        if(dp[left][right]!=null)
        return dp[left][right]
        let ans = 0;
        for(let k = left+1; k < right; k++)
        {
            let coins = dfs(left,k)+dfs(k,right)+ nums[left]*nums[k]*nums[right]

            ans = Math.max(ans,coins)
        }
        dp[left][right] = ans;
        return ans;
    }

    return dfs(0,nums.length-1)

};
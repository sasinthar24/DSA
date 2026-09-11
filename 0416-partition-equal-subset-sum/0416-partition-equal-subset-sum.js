/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0;
    for(num of nums)
    {
        sum+= num
    }
    if(sum % 2 != 0)
    return false

    let target = sum /2;
    const dp = Array.from({length:nums.length},()=> new Array(target+1).fill(null));
    function backtrack(index,sum)
    {
        if(sum == target)
        return true
         
        if(index === nums.length || sum > target)
        return false

        if(dp[index][sum] != null)
        return dp[index][sum];

       dp[index][sum] = backtrack(index+1,sum)||backtrack(index+1,nums[index]+sum)
       return dp[index][sum]
    }
  
  return backtrack(0,0)
};
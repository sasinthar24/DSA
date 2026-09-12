/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1)
    const count = new Array(nums.length).fill(1);
    let maxLength = 1;
    for(let i = 0; i < nums.length;i++)
    {
        let max = 0;
        for(let j = 0; j < i;j++)
        {
            if(nums[j] < nums[i])
            {
                if(dp[j] > max)
                {
                    max = dp[j]
                    count[i] = count[j];
                }
                else if(dp[j] == max)
                {
                    count[i]+=count[j];
                }
            }
        }
        dp[i] = max + 1;
        maxLength = Math.max(maxLength, dp[i]);
    }
  
    let ans = 0;

    for(let i = 0; i < nums.length; i++)
    {
        if(dp[i] == maxLength)
        {
            ans += count[i];
        }
    }

    return ans;
 

   
};
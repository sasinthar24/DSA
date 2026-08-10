/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
   let map = new Map();
   let sum = 0;
   let ans = 0;
   for(let i = 0; i < nums.length;i++)
   {
    sum+=nums[i];
    map.set(nums[i],(map.get(nums[i])||0)+1);
    if(i>=k)
    {
        map.set(nums[i-k],map.get(nums[i-k])-1);
        if(map.get(nums[i-k]) == 0)
        {
            map.delete(nums[i-k]);
        }
        sum-= nums[i-k]
    }
    if(i >= k-1)
    {
       if(map.size == k)
       {
        ans = Math.max(ans,sum)
       }
    }

   }
   return ans; 
};
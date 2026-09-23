/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
   let total = 0;
   for(const num of nums)
   {
    total+=num
   }
   let target = total - x;
   if(target == 0)
   return nums.length;
   if(target < 0)
   return -1;
   let maxLen = -1;
   let sum = 0;
   let left = 0;
   for(let i = 0; i < nums.length;i++)
   {
      sum+=nums[i]
      while(sum > target)
      {
        sum-=nums[left];
        left++;
      }
      if(sum == target)
      {
        maxLen = Math.max(maxLen,(i - left)+1)
      }
   }
    return maxLen == -1 ? -1 : nums.length - maxLen
  
};
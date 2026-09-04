/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
  const n = nums.length;
  let leftMax = new Array(n).fill(0);
  let rightMin = new Array(n).fill(0);
  leftMax[0] = nums[0]
  for(let i = 1; i < nums.length;i++)
  {
    if(nums[i] > leftMax[i-1])
    {
        leftMax[i] = nums[i]
    }
    else
    {
        leftMax[i] = leftMax[i-1]
    }
  }
  rightMin[n-1] = nums[n-1]
  for(let i = n-2; i >= 0; i--)
  {
    if(nums[i] < rightMin[i+1])
    {
        rightMin[i] = nums[i]
    }
    else
    {
        rightMin[i] = rightMin[i+1]
    }
  }
  let ans = Infinity;
  for(let i = 0; i < n;i++)
  {
    let val = leftMax[i] - rightMin[i]
    if(val <= k)
    {
        ans = Math.min(ans,i)
    }
  }
  return ans ==Infinity ? -1 : ans
};
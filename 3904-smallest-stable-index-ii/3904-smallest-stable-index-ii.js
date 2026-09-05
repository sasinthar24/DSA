/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    let leftMax = new Array(nums.length).fill(0);
    let rightMin = new Array(nums.length).fill(0);
    leftMax[0] = nums[0];
    for(let i = 1; i < nums.length;i++)
    {
        leftMax[i] = Math.max(nums[i],leftMax[i-1])
    }
    rightMin[nums.length-1] = nums[nums.length-1]
    for(let i = nums.length-2 ; i >= 0; i--)
    {
        rightMin[i] = Math.min(nums[i],rightMin[i+1])
    }
    let ans = Infinity;
    for(let i = 0; i < nums.length;i++)
    {
        let val = leftMax[i] - rightMin[i]
        if(val <= k)
        {
            ans = Math.min(ans,i)
        }
    }
    return ans == Infinity ? -1 : ans
};
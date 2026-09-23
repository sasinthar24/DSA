/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const n = nums.length;
    let prefix = new Array(n).fill(0);
    prefix[0] = nums[0];
    for(let i = 1; i < n; i++)
    {
        prefix[i] = prefix[i-1]+nums[i]
    }
    return prefix
    
};
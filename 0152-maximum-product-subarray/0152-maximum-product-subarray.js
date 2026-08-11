/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0];
    let tempMax = nums[0];
    let tempMin = nums[0];
    for(let i = 1; i < nums.length;i++)
    {
        let maxValue = Math.max(nums[i],nums[i]*tempMax,nums[i]*tempMin);
        let minValue = Math.min(nums[i],nums[i]*tempMax,nums[i]*tempMin);
        tempMax = maxValue;
        tempMin = minValue;
        max = Math.max(max,tempMax);
    }
    return max;
};
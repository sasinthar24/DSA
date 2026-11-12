/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let increasing = 1;
    let decreasing = 1;
    let maxIncreasing = 1;
    let maxDecreasing = 1;

    for(let i = 0; i < nums.length-1;i++)
    {
        if(nums[i] > nums[i+1])
        {
             increasing++;
             maxIncreasing = Math.max(increasing, maxIncreasing)
        }
        else
        {
            increasing = 1;
        }
    }

     for(let i = 0; i < nums.length-1;i++)
    {
        if(nums[i] < nums[i+1])
        {
             decreasing++;
             maxDecreasing = Math.max(decreasing, maxDecreasing)
        }
        else
        {
            decreasing = 1;
        }
    }

  return Math.max(maxIncreasing,maxDecreasing)
};
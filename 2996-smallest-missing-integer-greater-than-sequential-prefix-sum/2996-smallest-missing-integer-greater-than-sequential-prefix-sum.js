/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let sum = nums[0];
    for(let i = 1; i < nums.length;i++)
    {
        if(nums[i] == nums[i-1]+1)
        {
            sum+=nums[i];
        }
        else
        {
            break;
        }
    }
     nums.sort((a,b)=> a-b)
     for(num of nums)
     {
        if(num == sum)
        sum++;
     }
     return sum
};
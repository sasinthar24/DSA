/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let ans = 0;
    const n = nums.length;
    for(let i = 0; i < n; i++)
    {
       if(n % (i+1) == 0)
       ans+= nums[i]**2
    }
    return ans;
};
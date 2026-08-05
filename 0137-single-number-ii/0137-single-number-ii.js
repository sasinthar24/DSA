/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   let ans = 0;
   for(let i = 0; i < 32;i++)
   {
    let count = 0;
    for(let j = 0; j < nums.length;j++)
    {
       if((nums[j] & (1 << i)) != 0)
       count++;
    }
    if(count % 3 >=1)
    {
        ans = ans|(1 << i);
    }
   }
   return ans
};
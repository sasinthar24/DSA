/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let ans = 0;
    for(let i = 0; i < nums.length;i++)
    {
        for(let j = i ; j< nums.length; j++)
        {
            let set = new Set();
            for(let k = i; k <= j ; k++)
            {
                set.add(nums[k])
            }
            ans+= set.size ** 2
        }
    }
    return ans;

};
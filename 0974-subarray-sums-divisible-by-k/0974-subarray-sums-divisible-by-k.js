/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let map = new Map();
    let sum = 0;
    let ans = 0;
    map.set(0,1);
    for(let i = 0; i < nums.length;i++)
    {
        sum+=nums[i];
        let rem = sum % k;
        if(rem < 0)
        rem+=k;
        if(map.has(rem))
        {
            ans+= map.get(rem)
        }
        map.set(rem,(map.get(rem)||0)+1)
    }
    return ans;
};
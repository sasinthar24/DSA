/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    let map = new Map();
    let ans = -1;
    let start = 0;
    let end = k-1;
    while(end < nums.length)
    {
      let seen = new Set();

        for(let i = start; i <= end; i++)
        {
            seen.add(nums[i]);
        }

        for(const num of seen)
        {
            map.set(num, (map.get(num) || 0) + 1);
        }

        start++;
        end++;
    }
    for(const[key,value] of map)
    {
        if(value == 1)
        ans = Math.max(ans,key)
    }
    return ans;
};
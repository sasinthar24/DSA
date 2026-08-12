/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let map = new Map();
    let ans = 0;
    let left = 0;
    for(let right = 0; right < nums.length;right++)
    {
        map.set(nums[right],(map.get(nums[right])||0)+1);

        while(map.get(nums[right])>k)
        {
            map.set(nums[left],map.get(nums[left])-1);
            left++;
        }
        ans = Math.max(ans,(right-left)+1);
        
    }
    return ans;
};
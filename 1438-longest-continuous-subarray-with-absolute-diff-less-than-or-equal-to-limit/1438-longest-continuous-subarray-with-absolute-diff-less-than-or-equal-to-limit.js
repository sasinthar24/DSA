/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let maxDeque = [];
    let minDeque = [];
    let minHead = 0;
    let maxHead = 0;
    let ans = [];
    let left = 0;
    for(right = 0; right < nums.length ; right++)
    {
        while(minHead < minDeque.length && nums[right] <= nums[minDeque[minDeque.length-1]])
        {
            minDeque.pop();
        }
        minDeque.push(right);
        while(maxHead < maxDeque.length && nums[right] >= nums[maxDeque[maxDeque.length-1]])
        {
            maxDeque.pop();
        }
        maxDeque.push(right);
        while(nums[maxDeque[maxHead]] - nums[minDeque[minHead]] > limit)
        {
            if(maxDeque[maxHead] == left)
            maxHead++;
            if(minDeque[minHead] == left)
            minHead++;
            left++;
        }
        ans = Math.max(ans,right-left+1);
    }
    return ans;
};
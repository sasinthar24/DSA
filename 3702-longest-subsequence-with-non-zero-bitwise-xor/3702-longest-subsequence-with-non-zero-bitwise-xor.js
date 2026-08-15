/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    let xor = 0;
    let hasNonZero = false;
    for(const num of nums)
    {
        xor = num ^ xor;
        if(num != 0)
        hasNonZero = true;
    }
    if(xor != 0)
    return nums.length;
    if(hasNonZero)
    return nums.length-1;
    return 0;
};
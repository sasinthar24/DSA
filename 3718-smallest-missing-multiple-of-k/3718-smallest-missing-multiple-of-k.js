/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    let set = new Set(nums);
    let i = 1;
    while(true)
    {
        if(!set.has(i*k))
        return i*k;
        i++
    }
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    if(nums.length ==1)
    return 1;
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const minIndex = nums.indexOf(min);
    const maxIndex = nums.indexOf(max);
    const n = nums.length;
    const left = Math.min(minIndex,maxIndex);
    const right = Math.max(minIndex,maxIndex);
    const opt1 = right+1;
    const opt2 = n - left;
    const opt3 = (left+1) + (n-right);

    return Math.min(opt1,opt2,opt3)
};
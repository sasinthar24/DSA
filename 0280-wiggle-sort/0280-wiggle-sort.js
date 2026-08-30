/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    function swap(i,j)
    {
        [nums[i],nums[j]] = [nums[j],nums[i]]
    }
    nums.sort((a,b)=> a- b);

    for(let i = 1; i < nums.length-1;i+=2)
    {
        swap(i,i+1)
    }
    return nums;
};
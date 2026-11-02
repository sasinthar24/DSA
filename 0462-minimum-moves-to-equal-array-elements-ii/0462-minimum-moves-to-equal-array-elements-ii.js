/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a,b)=> a - b);
    const n = nums.length;

    let mid = Math.floor((0+n)/2)
    
    const midNum = nums[mid];
    let op = 0;
    for(let i = 0; i < n;i++)
    {
        if(i != mid)
        {
            op+=Math.abs(nums[i]-midNum)
        }
    }
    return op;
};
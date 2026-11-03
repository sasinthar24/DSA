/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let max = Math.max(...nums)
    let ops = 0;
    for(let num of nums)
    {
        if(num != max)
        {
            ops += Math.abs(max-num)
        }
    }
    return ops
};
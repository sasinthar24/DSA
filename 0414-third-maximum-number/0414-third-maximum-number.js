/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    //const set = new Set(nums);
    // if(nums.size < 3)
    // {
    //     return Math.max(...nums);
    // }

    let firstMax = -Infinity;
    let secondMax = -Infinity;
    let thirdMax = -Infinity;

    for(const num of nums)
    {
        if(num == firstMax || num == secondMax || num == thirdMax)
        continue;
        if(num > firstMax)
        {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = num
        }
        else if(num > secondMax)
        {
            thirdMax = secondMax;
            secondMax = num
        }
        else if(num > thirdMax)
        {
            thirdMax = num;
        }
    }
    return thirdMax == -Infinity ? firstMax : thirdMax;
};
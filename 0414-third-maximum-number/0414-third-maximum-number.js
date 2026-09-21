/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const set = new Set(nums);
    if(set.size < 3)
    {
        return Math.max(...nums);
    }

    let firstMax = -Infinity;
    let secondMax = -Infinity;
    let thirdMax = -Infinity;

    for(const num of set)
    {
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
    return thirdMax;
};
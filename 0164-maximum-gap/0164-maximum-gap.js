/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if(nums.length < 2)
    return 0;
    let minValue = Math.min(...nums);
    let maxValue = Math.max(...nums);
    const n = nums.length;
    let gap = Math.ceil((maxValue-minValue)/(n-1));
    let minBucket = new Array(n-1).fill(Infinity);
    let maxBucket = new Array(n-1).fill(-Infinity);
    for(const num of nums)
    {
        if(num == minValue || num == maxValue)
        continue;
        let index = Math.floor((num-minValue)/gap);
        minBucket[index] = Math.min(num,minBucket[index]);
        maxBucket[index] = Math.max(num,maxBucket[index]);
    }
    let previous = minValue;
    let ans = 0;
    for(let i = 0; i < n-1;i++)
    {
        if(minBucket[i] == Infinity)
        continue;
        ans = Math.max(ans,minBucket[i] - previous);
        previous = maxBucket[i]
    }
    ans = Math.max(ans,maxValue - previous);
    return ans;
    


};
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    const n = weights.length;
    let prefixArray = new Array(n).fill(0);
    prefixArray[0] = weights[0];
    for(let i = 1; i < weights.length;i++)
    {
        prefixArray[i] = prefixArray[i-1]+weights[i];
    }
    
    function canSolve(cap)
    {
        let sum = 0;
        let day = 1;
        for(let right = 0; right < weights.length;right++)
        {
            if(weights[right] > cap)
            return false
            sum+=weights[right];
            if(sum > cap)
            {
                day++;
                sum = weights[right]
            }
            if(day > days)
            return false;
        }
        return true;
    }
    let left = prefixArray[0];
    let right = prefixArray[n-1];
    let ans = right;
    while(left < right)
    {
        let mid = Math.floor((left+right)/2);
        if(canSolve(mid))
        {
            right = mid
        }
        else
        {
            left = mid+1
        }
    }
    return left
    
};
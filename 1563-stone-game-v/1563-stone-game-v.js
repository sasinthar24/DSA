/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function(stoneValue) {
    const n = stoneValue.length;
    let prefix = new Array(n).fill(0);
    prefix[0] = stoneValue[0];
    for(let i = 1; i < n;i++)
    {
        prefix[i] = prefix[i-1]+stoneValue[i];
    }
    const dp = Array.from({length:n},()=> new Array(n).fill(-1));
    function sum(left,right)
    {
        if(left == 0)
        return prefix[right];
        else
        return prefix[right]-prefix[left-1];
    }

    function solve(left,right)
    {
        if(left == right)
        return 0;

        if(dp[left][right] != -1)
        return dp[left][right];
        let ans = 0;
        for(let mid = left; mid < right; mid++)
        {
            let leftSum = sum(left,mid);
            let rightSum = sum(mid+1,right);

            if(leftSum > rightSum)
            {
                ans = Math.max(ans,rightSum+solve(mid+1,right));
            }
            else if(rightSum > leftSum)
            {
                ans =  Math.max(ans,leftSum+solve(left,mid));
            }
            else
            {
                ans = Math.max(leftSum+solve(left,mid),rightSum+solve(mid+1,right),ans);
            }
        }
        dp[left][right] = ans;
        return dp[left][right];
    }
    return solve(0,n-1)
};
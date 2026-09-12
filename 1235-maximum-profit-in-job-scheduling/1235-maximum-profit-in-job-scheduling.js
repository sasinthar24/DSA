/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    let jobs = [];
    const n = profit.length;

    for(let i = 0; i < n; i++)
    {
        jobs.push([startTime[i],endTime[i],profit[i]])
    }
    jobs.sort((a,b)=> a[0]-b[0]);
    const dp = new Array(n).fill(null);
    function lowerBound(end)
    {
        let left = 0;
        let right = n-1;
        while(left <= right)
        {
            let mid = Math.floor((left+right)/2);
            if(jobs[mid][0] >= end)
            {
                right = mid-1
            }
            else
            {
                left = mid+1
            }
        }
        return left
    }

    function dfs(index)
    {
        if(index == n)
        return 0;

        if(dp[index] != null)
        return dp[index];

        let notTake = dfs(index+1);
        
        let next = lowerBound(jobs[index][1]);

        let take = jobs[index][2] + dfs(next);

        dp[index] = Math.max(take,notTake)
        return dp[index]
    }

    return dfs(0);

};
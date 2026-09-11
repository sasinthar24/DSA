/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    const n = stones.length;
    let sum = 0;
    for(const num of stones)
    {
        sum += num;
    }
    let target = Math.floor(sum / 2);
    const dp = Array.from({length:n},()=> new Array(target+1))
    
    function dfs(index,sum)
    {
        if(index === n)
        {
            return sum;
        }
        if(dp[index][sum])
        return dp[index][sum]

        let notTake = dfs(index+1,sum)
        let take = 0;
        if(sum+ stones[index] <= target)
        {
            take = dfs(index+1 ,sum+stones[index])
        }
        dp[index][sum] =  Math.max(take,notTake);
        return  dp[index][sum] 
    }
    let best =  dfs(0,0)
    return sum - 2* best
};
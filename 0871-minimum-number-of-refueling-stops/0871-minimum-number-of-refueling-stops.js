/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
    const n = stations.length
    const dp = new Array(n+1).fill(0);
    dp[0] = startFuel;
    for(let i = 0 ;i < n;i++)
    {
        const [position,fuel] = stations[i]
        for(let stops = i; stops>=0;stops--)
        {
            if(dp[stops] >= position)
            {
                dp[stops+1] = Math.max(dp[stops+1], dp[stops]+fuel);
            }
        }
    }
    for(let i = 0; i < dp.length;i++)
    {
        if(dp[i] >= target)
        return i
    }
    return -1
};
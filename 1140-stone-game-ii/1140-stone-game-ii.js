/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    let n = piles.length;
    const dp = Array.from({length:n+1},()=> new Array(n+1).fill(-1))
    
    function dfs(index,m)
    {
        if(index >= n)
        return 0;
        if(dp[index][m] != -1)
        return dp[index][m];
       let best = -Infinity;
       let sum = 0;
        for(let x = 1; x <= 2*m && index+x<=n; x++)
        {
            sum+=piles[index+x-1];
           let newM = Math.max(x,m);
            best = Math.max(best,sum-dfs(index+x,newM));
        }
        dp[index][m] = best
        return dp[index][m];
    }
    let diff = dfs(0,1);
    
    let total = 0;
    for(const pile of piles)
    {
        total+=pile
    }
    return (total+diff)/2
};
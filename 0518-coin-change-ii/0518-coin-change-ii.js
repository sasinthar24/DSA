/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const n = coins.length;
    const dp = Array.from({length:n},()=> new Array(amount+1).fill(-1));

    function dfs(index,target)
    {
        if(target == 0)
        return 1;
        if(index == n)
        return 0
        if(dp[index][target] != -1)
        return dp[index][target];

        let notPick = dfs(index+1,target)
        
        let pick = 0;
        if(coins[index] <= target)
        {
            pick = dfs(index,target-coins[index]);
        }

        dp[index][target] = pick+notPick
        return dp[index][target];
    }

   return dfs(0,amount);
   
};
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    
    const n = s.length;
    const dp2 = Array.from({length:n},()=> new Array(n).fill(false));

    for(let len = 1; len <= n; len++)
    {
        let i = 0;
        let j = i + len - 1;
        while(j < n)
        {
            if(len == 1)
            {
                dp2[i][j] = true;
            }
            else if(len == 2)
            {
                dp2[i][j] = s[i] == s[j]
            }
            else
            {
                if(s[i] == s[j])
                {
                    dp2[i][j] = dp2[i+1][j-1]
                }
                else
                {
                    dp2[i][j] = false;
                }
            }
            i++
            j++
        }
        
    }
   console.log(dp2)
    
    const dp = new Array(n).fill(-1);
    function dfs(end)
    {
        if(end < 0)
        return 0
         if(dp2[0][end])
         return 0;
         if(dp[end] != -1)
         return dp[end];

         let min = Infinity;
         for(let i = end; i>=0; i--)
         {
            if(dp2[i][end])
            {
                  let cutCount = 1+ dfs(i-1);
                  min = Math.min(min,cutCount);
            }
         }
         dp[end] = min;
         return dp[end];
    }
    return dfs(n-1)
};
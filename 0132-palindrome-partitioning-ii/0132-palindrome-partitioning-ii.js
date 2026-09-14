/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    function checkPalindrom(left,right)
    {
         while(left < right)
         {
            if(s[left] != s[right])
            {
                return false
            }
            left++;
            right--;
         }
         return true;
    }

    const n = s.length;
    const dp = new Array(n).fill(-1);
    function dfs(end)
    {
        if(end < 0)
        return 0
         if(checkPalindrom(0,end))
         return 0;
         if(dp[end] != -1)
         return dp[end];

         let min = Infinity;
         for(let i = end; i>=0; i--)
         {
            if(checkPalindrom(i,end))
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
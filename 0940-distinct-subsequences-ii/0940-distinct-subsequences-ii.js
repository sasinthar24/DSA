/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
    const Mod = 1000000007;
    
   let dp = new Array(26).fill(0);
   for(const ch of s)
   {
      let total = 1;
      for(let i = 0; i < 26; i++)
      {
        total = (total+dp[i]) % Mod;
      }

      let index = ch.charCodeAt(0) - 97
      dp[index] = total;
   }

  let ans = 0;
   for(let i = 0;i < 26 ;i++)
   {
    ans+=dp[i] % Mod;
   }
   return ans % Mod;
};
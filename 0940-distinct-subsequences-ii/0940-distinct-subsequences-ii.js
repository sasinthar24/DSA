/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
   const Mod = 1000000007;
    
    const dp = new Array(s.length+1).fill(0);
    dp[0] = 1;
    let map = new Map();
    for(let i =1; i <= s.length;i++)
    {
       let ch = s[i-1];
       dp[i] = (2 * dp[i-1]) %Mod;
       if(map.has(ch))
       {
        let prev = map.get(ch);
        dp[i] = (dp[i] - dp[prev-1] + Mod)% Mod
       }
       map.set(ch,i)
    }
    return (dp[s.length]-1 + Mod) % Mod
};
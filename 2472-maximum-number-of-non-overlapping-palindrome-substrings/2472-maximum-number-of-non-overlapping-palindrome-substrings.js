/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function(s, k) {
    const n = s.length;
    const dp = Array.from({length:n},()=> new Array(n).fill(false));
    if(k == 1)
    return s.length
    for(let i = n-1; i >=0; i--)
    {
        for(let j = i; j < n; j++)
        {
            if(s[i] == s[j])
            {
                if(j-i <= 1)
                {
                    dp[i][j] = true;
                }
                else
                {
                    dp[i][j] = dp[i+1][j-1]
                }
            }
        }
    }
   const memo = new Array(n + 1).fill(-1);

    function dfs(i) {
        if (i >= n) {
            return 0;
        }

        if (memo[i] !== -1) {
            return memo[i];
        }

        // Skip current character
        let ans = dfs(i + 1);

        // Find the FIRST valid palindrome
        for (let j = i + k - 1; j < n; j++) {

            if (dp[i][j]) {
                ans = Math.max(
                    ans,
                    1 + dfs(j + 1)
                );

                // Important:
                // first valid palindrome is enough
                break;
            }
        }

        return memo[i] = ans;
    }

    return dfs(0);
  
};
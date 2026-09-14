/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const n = s.length;
    const m = p.length;
    const dp = Array.from({length:n},()=> new Array(m).fill(null));

    function hasStar(index)
    {
        for(let i = 0; i <= index;i++)
        {
            if(p[i] != '*')
            return false
        }
        return true;
    }

    function match(i,j)
    {
        if(i < 0 && j < 0)
        {
            return true
        }
        else if(i < 0 && hasStar(j))
        {
            return true;
        }
        else if(i < 0 || j < 0)
        {
            return false;
        }

        if(dp[i][j] != null)
        return dp[i][j];
        if(s[i] == p[j]|| p[j]=="?")
        {
            dp[i][j] = match(i-1,j-1)
            return dp[i][j]
        }
        else if(p[j] == "*")
        {
            dp[i][j] = match(i-1,j) || match(i,j-1)
            return dp[i][j]
        }
        else
        {
            dp[i][j] = false
            return dp[i][j]
        }
    }
    return match(n-1,m-1)
};
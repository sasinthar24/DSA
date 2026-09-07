/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let dp = Array.from({length:s.length},()=>new Array(t.length).fill(-1));

    function backTrack(i,j)
    {
        if(j == t.length)
        return 1;
        if(i == s.length)
        return 0;
        if(dp[i][j] != -1)
        return dp[i][j];

        let count = backTrack(i+1,j);
        if(s[i] == t[j])
        count+= backTrack(i+1,j+1);

        dp[i][j] = count;
        return count;
    }
    return backTrack(0,0);
    

};
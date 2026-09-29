/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const len = (m + n)-1;
    if(len % 2 != 0)
    return false;
    let dp = Array.from({length:n},()=> Array.from({length:m},()=> new Array((n+m)+1).fill(null)));
    function dfs(r,c,openingCount)
    {
        if(openingCount < 0)
        return false
        if(r >= n || c >= m)
        return false;
        if(grid[r][c] == '(')
        openingCount++;
        else
        openingCount--;
        if(openingCount < 0)
        return false;
        if(r == n-1 && c == m-1)
        {
            if(openingCount == 0)
            return true;
        }
        if(dp[r][c][openingCount] != null)
        return dp[r][c][openingCount];
        const down = dfs(r+1,c,openingCount);
        const right = dfs(r,c+1,openingCount);
        
      dp[r][c][openingCount] = (down || right)
      return  dp[r][c][openingCount]
    }

   return  dfs(0,0,0)
};
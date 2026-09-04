/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let n = heights.length;
    let m = heights[0].length;
    const dx = [0,1,-1,0]
    const dy = [1,0,0,-1]
    const pacific = Array.from({length:n},()=> new Array(m).fill(false));
    const atlantic = Array.from({length:n},()=> new Array(m).fill(false));

    function dfs(r,c,ocean)
    {
        ocean[r][c] = true;
        for(let k = 0; k < 4; k++)
        {
            let nr = r + dx[k];
            let nc = c + dy[k];
            if(nr >= 0 && nr < n&& nc >= 0&& nc < m && !ocean[nr][nc] &&heights[nr][nc]>=heights[r][c])
            {
                dfs(nr,nc,ocean);
            }
        }
    }
    for(let r = 0; r < n ; r++)
    {
        dfs(r,0,pacific)
    }
    for(let c = 0; c < m ; c++)
    {
        dfs(0,c,pacific)
    }
    for(let r = 0 ; r < n; r++)
    {
        dfs(r,m-1,atlantic)
    }
    for(let c = 0 ; c < m ; c++)
    {
        dfs(n-1,c,atlantic)
    }
   let result = [];
   for(let r = 0; r < n; r++)
   {
    for(let c = 0; c < m; c++)
    {
        if(pacific[r][c] && atlantic[r][c])
        result.push([r,c])

    }
   }
   return result
};
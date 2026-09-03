/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var dx = [0,1,0,-1];
    var dy = [1,0,-1,0];

    var n = grid.length;
    var m = grid[0].length;
    var island = 0;
    for(var r = 0; r < n ; r++)
    {
        for(var c = 0 ; c < m ; c++)
        {
            if(grid[r][c] == 1)
            {
                island++;
                dfs(r,c)
            }
        }
    }
    function dfs(r,c)
    {
        grid[r][c] =  -1
        for(var i = 0 ; i < 4; i++)
        {
            var nr = r + dx[i]
            var nc = c + dy[i]
            while(nr >= 0 && nr < n && nc >= 0 && nc < m && grid[nr][nc] == 1)
            {
                dfs(nr,nc)
            }
        }
    }
    return island
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    let n = grid.length;
    let area = new Map();
    let islandId = 2;
    const dx = [0,1,-1,0]
    const dy = [1,0,0,-1]
    function dfs(r,c,id)
    {
        grid[r][c] = id;
        let count = 1;
        for(let k = 0;k < 4; k++)
        {
            let nr = r + dx[k];
            let nc = c + dy[k];
            if(nr >=0 && nr <n && nc >=0 && nc < n && grid[nr][nc] == 1)
            {
                count+= dfs(nr,nc,id)
            }
        }
        return count;
    }
  let max = 0;
    for(let r = 0; r < n; r++ )
    {
        for(let c = 0; c < n; c++)
        {
            if(grid[r][c]==1)
            {
              let size = dfs(r,c,islandId)
              area.set(islandId,size);
              max = Math.max(max,size);
              islandId++;  
            }
        }
    }
    
    for(let r = 0; r < n; r++)
    {
        for(let c = 0; c < n ; c++)
        {
            if(grid[r][c] == 0)
            {
                let island = new Set();
                for(let k = 0; k < 4; k++)
                {
                    let nr = r + dx[k]
                    let nc = c + dy[k]
                    if(nr >=0 && nr < n && nc >=0 &&nc <n && grid[nr][nc] != 0)
                    {
                        island.add(grid[nr][nc]);
                    }
                }
              let count = 1;
              for(const id of island)
              {
                count+= area.get(id);
              }
              max = Math.max(max,count);
            }

            
        }
    }
    return max
};
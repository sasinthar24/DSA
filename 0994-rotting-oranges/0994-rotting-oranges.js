/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let time = 0;
    let queue = [];
    let head = 0;
    let n = grid.length;
    let m = grid[0].length;
    let fresh = 0
    for(let r = 0; r < n;r++)
    {
        for(let c = 0; c < m; c++)
        {
            if(grid[r][c] == 2)
            {
                queue.push([r,c]);
            }
            else if(grid[r][c] == 1)
            {
                fresh++;
            }
        }
    }
    
    const dx = [1,0,-1,0];
    const dy = [0,1,0,-1];
    while(head < queue.length&& fresh > 0)
    {
        const size = queue.length-head
        for(let i = 0;i < size;i++)
        {
            const [r,c] = queue[head++];
            for(let k = 0; k < 4 ;k++)
            {
                let nr = r + dx[k]
                let nc = c + dy[k]
                if(nr >=0 && nr < n && nc >= 0 && nc < m && grid[nr][nc] == 1)
                {
                    grid[nr][nc] = 2;
                    queue.push([nr,nc])
                    fresh--;
                }
            }
        }
        time++;
    }

    return fresh == 0 ? time:-1
};
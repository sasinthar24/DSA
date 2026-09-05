/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let n = mat.length;
    let m = mat[0].length;
    
    let grid = Array.from({length:n},()=> new Array(m).fill(-1));
    const dx = [0,1,0,-1]
    const dy = [1,0,-1,0]
    let queue = [];
    let head = 0;
    for(let r = 0; r < n ; r++)
    {
        for(let c = 0 ; c < m ; c++)
        {
            if(mat[r][c] == 0)
            {
                grid[r][c] = 0
                queue.push([r,c]);
            }
        }
    }
    while(head < queue.length)
    {
        const [r,c] = queue[head++];
        for(let k = 0; k < 4 ; k++)
        {
            let nr = r + dx[k];
            let nc = c + dy[k];
            if(nr >=0 && nr < n && nc >=0 && nc < m && grid[nr][nc] == -1)
            {
                grid[nr][nc] = grid[r][c]+1;
                queue.push([nr,nc]);
            }
        }
    }
    return grid;
    
};
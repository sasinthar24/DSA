/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const n = grid.length;
    const m = grid[0].length;
    let visited = Array.from({length:n},()=> Array.from({length:m},()=> new Array(k+1).fill(false)));
    let queue = [];
    let head = 0;
    let steps = 0;
    const dx = [0,1,-1,0]
    const dy = [1,0,0,-1]
    queue.push([0,0,k]);
    visited[0][0][k] = true;
    while(head < queue.length)
    {
        let size = queue.length - head;
        for(let i = 0;i < size ;i++)
        {
            const [r,c,remain] = queue[head++];
            if(r == n-1 && c == m-1)
            return steps
            for(let k = 0; k < 4; k++)
            {
                let nr = r + dx[k];
                let nc = c + dy[k];
                
                if(nr < 0 || nr >= n || nc < 0 || nc >= m)
                continue;
                 let newRemain = remain;
              
                if(grid[nr][nc] == 1)
                {
                  if(remain == 0)
                  continue
                  newRemain = remain-1 ;
                }
               
                if(visited[nr][nc][newRemain])
                continue;
                visited[nr][nc][newRemain] = true;

                queue.push([nr,nc,newRemain]);
            }
        }
        steps++;
    }
    return -1
};
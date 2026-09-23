/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const dx = [0,1,0,-1];
    const dy = [1,0,-1,0];
    const n = image.length;
    const m = image[0].length;
    function dfs(r,c)
    {
        const orginal = image[r][c];
        image[r][c] = -1;
        for(let i = 0; i < 4; i++)
        {
            let nr = r + dx[i];
            let nc = c + dy[i];
            if(nr >=0 && nr < n && nc >=0 && nc < m && image[nr][nc] == orginal)
            {
                dfs(nr,nc)
            }
        }
    }
    dfs(sr,sc)
    for(let r = 0;r < n; r++)
    {
        for(let c = 0; c < m; c++)
        {
            if(image[r][c] == -1)
            image[r][c] = color
        }
    }
    return image
};
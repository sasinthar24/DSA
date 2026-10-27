/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function(m, n) {
    
    let grid = Array.from({length:m},()=> new Array(n).fill('#'));
    for(let c = 0; c < n; c++)
    {
        grid[0][c] = '.'
    }
    for(let r = 0; r < m; r++)
    {
        grid[r][n-1] = '.'
    }
    return grid.map((a)=>a.join('') )
};
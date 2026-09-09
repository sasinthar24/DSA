/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);

    function dfs(city)
    {
        visited[city] = true;
        for(let i = 0; i < n;i++)
        {
            if(isConnected[city][i] == 1)
            {
                if(!visited[i])
                dfs(i)
            }
        }
    }

    let count = 0;
    for(let i =0; i < n;i++)
    {
        if(!visited[i])
        {
            count++;
            dfs(i)
        }
    }
    return count;
};
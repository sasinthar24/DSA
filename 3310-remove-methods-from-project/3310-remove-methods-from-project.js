/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function(n, k, invocations) {
    const graph = Array.from({length:n},()=> [])
    for(const [u,v] of invocations)
    {
        graph[u].push(v)
    }
    let visited = new Array(n).fill(false);
    function dfs(node)
    {
       visited[node] = true;
       for(const nbr of graph[node])
       {
        if(!visited[nbr])
        {
           dfs(nbr)
        }
         
       }
    }
    dfs(k);
   let canremove = true;
   for(const [u,v] of invocations)
   {
    if(!visited[u] && visited[v])
    {
        canremove = false;
        break
    }
   }
   let ans = [];
   if(!canremove)
   {
      for(let i = 0 ; i < n;i++)
      {
        ans.push(i)
      }
   }
   else
   {
      for(let i = 0; i < n;i++)
      {
         if(!visited[i])
         ans.push(i)
      }
   }
   return ans
};
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
  let state = new Array(graph.length).fill(0)
  function dfs(node)
  {
    if(state[node] == 1)
    return false;
    if(state[node] == 2)
    return true;

    state[node] = 1;
    for(const nbr of graph[node])
    {
        if(!dfs(nbr))
        return false
    }
    state[node] = 2;
    return true;
  }
  const result = [];
  for(let i= 0; i < graph.length;i++)
  {
        if(dfs(i))
        result.push(i)  
  }
  return result;
};
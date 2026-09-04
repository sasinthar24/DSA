/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let set = new Array(graph.length).fill(-1);

    function dfs(node,C)
    {
      set[node] = C;
      for(const nbr of graph[node])
      {
        if(set[nbr] == -1)
        {
            if(!dfs(nbr,1-C))
            return false
        }
        else if(set[nbr] == C)
        return false
      }
      return true;
    }

    for(let i = 0 ; i < graph.length;i++)
    {
        if(set[i] == -1)
        {
            if(!dfs(i,0))
            return false
        }
    }
    return true;
};
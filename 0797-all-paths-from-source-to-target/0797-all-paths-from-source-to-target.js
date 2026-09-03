/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let result = [];
    function dfs(node,path)
    {
         path.push(node)
         if(node == graph.length-1)
         {
            result.push([...path])
         }

         for(const nbr of graph[node])
         {
              dfs(nbr,path)     
         }
         path.pop()
    }
    dfs(0,[]);
    
    return result;
};
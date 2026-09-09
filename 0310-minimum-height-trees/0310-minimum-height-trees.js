/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if(n == 1)
    return [0]
    const graph = Array.from({length:n},()=> []);
    const degree = new Array(n).fill(0);
    for(const [u,v] of edges)
    {
        graph[u].push(v);
        graph[v].push(u);
        degree[u]++;
        degree[v]++;
    }
    let queue = [];
    let head = 0;
    for(let i = 0; i < n;i++)
    {
        if(degree[i] == 1)
        queue.push(i)
    }
   
   let remaining = n;
   while(remaining > 2)
   {
    let size = queue.length - head;
    remaining -= size;
    for(let i = 0; i < size;i++)
    {
        let node = queue[head++];
        for(const nbr of graph[node])
        {
            degree[nbr]--;
            if(degree[nbr] == 1)
            queue.push(nbr);
        }
    }
   }

   return queue.slice(head)
};
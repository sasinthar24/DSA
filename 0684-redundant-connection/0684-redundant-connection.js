/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const n = edges.length
    const parent = new Array(n+1).fill(0);
    const size = new Array(n+1).fill(1);
    for(let i = 1; i <= n;i++)
    {
        parent[i] = i;
    }

    function findParent(x)
    {
        if(parent[x] == x)
        return x;

        parent[x] = findParent(parent[x]);
        return parent[x];
    }
    
    function union(a,b)
    {
        let rootA = findParent(a);
        let rootB = findParent(b);
        if(rootA == rootB)
        return false;

        if(size[rootA] < size[rootB])
        {
            [rootA,rootB] = [rootB,rootA]; 
        }

        parent[rootB] = rootA;
        size[rootA] += size[rootB];
        return true;
    }
    for(const [u,v] of edges)
    {
        if(!union(u,v))
        return [u,v]
    }

};
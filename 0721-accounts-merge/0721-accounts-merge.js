/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const n = accounts.length;
    const parent = new Array(n).fill(0);
    const size = new Array(n).fill(1);
    
    for(let i = 0; i < n;i++)
    {
        parent[i] = i;
    }

    function findparent(x)
    {
        if(parent[x] == x)
        return x;

        parent[x] = findparent(parent[x]);
        return parent[x];
    }

    function union(a,b)
    {
        let rootA = findparent(a);
        let rootB = findparent(b);

        if(rootA == rootB)
        return;

        if(size[rootA] < size[rootB])
        [rootA,rootB] = [rootB, rootA];

        parent[rootB] = rootA;
        size[rootA]+= size[rootB];
    }


    let mailMap = new Map();
    for(let i =0 ; i < n; i++)
    {
        for(let j = 1; j < accounts[i].length;j++)
        {
            if(mailMap.has(accounts[i][j]))
            {
                let prev = mailMap.get(accounts[i][j])
                union(i,prev)
            }
            else
            {
                mailMap.set(accounts[i][j],i);
            }
        }
    }

   let groupMap = new Map();
   for(let i = 0;i < n; i++)
   {
    let root = findparent(i);

    if(!groupMap.has(root))
    {
        groupMap.set(root,[]);
    }
    for(let j = 1; j < accounts[i].length;j++)
    {
        groupMap.get(root).push(accounts[i][j])
    }
   }
   let result = [];
   for(const [root,emails] of groupMap)
   {
       let email = [...new Set(emails)].sort();

       result.push([accounts[root][0] ,...email]);
   }
   return result
};
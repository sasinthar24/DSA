/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function(n, m, group, beforeItems) {
    const itemGraph = Array.from({length:n},()=> []);
    const itemDegree = new Array(n).fill(0);
    for(let i = 0; i < group.length;i++)
    {
        if(group[i] == -1)
        group[i] = m++;
    }
    const groupGraph = Array.from({length:m},()=> []);
    const groupDegree = new Array(m).fill(0);

    for(let item = 0; item < n ;item++)
    {
        for(const before of beforeItems[item])
        {
            itemGraph[before].push(item);
            itemDegree[item]++;

            if(group[before] != group[item])
            {
                groupGraph[group[before]].push(group[item]);
                groupDegree[group[item]]++;
            }
        }
    }
    function topoSort(graph , degree)
    {
        let queue = [];
        let head = [];
        for(let i = 0;i < degree.length; i++)
        {
           if(degree[i] == 0)
           queue.push(i)
        }
        let result = [];
        while(head < queue.length)
        {
            let node = queue[head++];
            result.push(node)
            for(const nbr of graph[node])
            {
                degree[nbr]--;
                if(degree[nbr] == 0)
                queue.push(nbr);
            }
        }
        return result.length == degree.length ? result : [];
    }

    let itemSort = topoSort(itemGraph,itemDegree);
    
    if(itemSort.length == 0)
    return [];

    let groupSort = topoSort(groupGraph,groupDegree)
    if(groupSort.length == 0)
    return [];

    const groupItem = Array.from({length:m},()=> []);
    for(const item of itemSort)
    {
        groupItem[group[item]].push(item)
    }
    let result = []
    for(const g of groupSort)
    {
        for(const item of groupItem[g])
        {
           result.push(item)
        }
    }
    return result;

};
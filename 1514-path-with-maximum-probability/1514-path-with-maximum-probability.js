/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
 class heap
 {
    constructor(compare)
    {
        this.heap = [];
        this.compare = compare;
    }

    size()
    {
        return this.heap.length;
    }

    isEmpty()
    {
        return this.heap.length == 0;
    }

    push(val)
    {
        this.heap.push(val)
        this.bubbleUp();
    }

    bubbleUp()
    {
        let index = this.heap.length-1;
        while(index > 0)
        {
            let parent = Math.floor((index-1)/2);
            if(this.compare(this.heap[parent],this.heap[index]))
            break;
            [this.heap[parent],this.heap[index]] = [this.heap[index],this.heap[parent]];
            index = parent;
        }
    }

    pop()
    {
        if(this.heap.length == 0)
        return null;

        if(this.heap.length == 1)
        return this.heap.pop();
        let top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }

    bubbleDown()
    {
        let n = this.heap.length;
        let index = 0;
        while(true)
        {
            let left = 2 * index+1;
            let right = 2 * index+2;
            let best = index;
            if(left < n && !this.compare(this.heap[best],this.heap[left]))
            {
                best = left
            }
            if(right < n && !this.compare(this.heap[best],this.heap[right]))
            {
                best = right
            }
            if(index == best)
            break;

            [this.heap[best],this.heap[index]] = [this.heap[index],this.heap[best]]
            index = best;
        }
    }
 }
var maxProbability = function(n, edges, succProb, start_node, end_node) {
    const graph = Array.from({length:n},()=> []);
    for (let i = 0; i < edges.length; i++) 
    {
    const [u, v] = edges[i];
    graph[u].push([v, succProb[i]]);
    graph[v].push([u, succProb[i]]);
    }
    let dist = new Array(n).fill(-Infinity)
    dist[start_node] = 1 
    let maxHeap = new heap((a,b)=> a[0] >= b[0]);
    maxHeap.push([1,start_node]);

    while(!maxHeap.isEmpty())
    {
        let [currentCost,node] = maxHeap.pop();
        
        for(const [nbr,cost] of graph[node])
        {
            let newCost = currentCost * cost;
            if(newCost > dist[nbr])
            {
                dist[nbr] = newCost;
                maxHeap.push([newCost,nbr])
            }
        }
    }
    return dist[end_node] == -Infinity? 0 : dist[end_node]
};
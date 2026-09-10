/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
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
var networkDelayTime = function(times, n, k) {
    const graph = Array.from({length:n+1},()=>[]);
    for(const[u,v,w] of times)
    {
        graph[u].push([v,w])
    }
    const dist = new Array(n+1).fill(Infinity);
    dist[k] = 0;
    let minHeap = new heap((a,b)=> a[0] <= b[0])
    minHeap.push([0,k]);

    while(!minHeap.isEmpty())
    {
        let [currentDist,node] = minHeap.pop();
        if(currentDist > dist[node])
        continue;
        for(const[nbr,weight] of graph[node])
        {
            let newDis = currentDist + weight;
            if(newDis < dist[nbr])
            {
                dist[nbr] = newDis;
                minHeap.push([newDis,nbr])
            }
        }
    }
    let ans = 0;
    for(let i = 1; i <= n;i++)
    {
        if(dist[i] == Infinity)
        return -1;
        ans = Math.max(ans,dist[i])
    }
    return ans;
    
};